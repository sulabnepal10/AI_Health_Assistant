import { useState } from 'react';
import axios from 'axios';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import ChatBubble from '../ui/ChatBubble';
import { Loader2, Maximize2, Minimize2 } from 'lucide-react';

export default function SymptomAdvisorCard() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);  // 👈 NEW

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:8000/symptoms', {
        messages: updated,
      });
      setMessages([...updated, { role: 'assistant', content: res.data.response }]);
    } catch {
      setMessages([...updated, { role: 'assistant', content: 'Error contacting server.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Symptom Advisor" color="green">
      {/* Expand / Collapse button */}
      <div className="flex justify-end mb-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-gray-600 hover:text-black dark:text-gray-300"
        >
          {expanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>

      {/* Chat area */}
      <div
        className={`
          overflow-y-auto border rounded p-2 mb-3 bg-gray-50 dark:bg-gray-800
          transition-all duration-300
          ${expanded ? 'h-[70vh]' : 'h-64'}
        `}
      >
        {messages.map((m, i) => (
          <ChatBubble key={i} role={m.role}>
            {m.content}
          </ChatBubble>
        ))}

        {loading && (
          <div className="flex justify-center py-2">
            <Loader2 className="w-5 h-5 animate-spin text-green-600" />
          </div>
        )}
      </div>

      {/* Input + Button */}
      <div className="flex gap-2">
        <Input
          placeholder="Describe your symptoms..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !loading && sendMessage()}
        />
        <Button onClick={sendMessage} disabled={loading || !input}>
          Send
        </Button>
      </div>
    </Card>
  );
}
