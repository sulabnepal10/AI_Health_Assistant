import { useState } from 'react';
import axios from 'axios';
import Card from '../ui/Card';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { Copy, Check } from 'lucide-react';

export default function SummarizerCard() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const summarize = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post('https://ai-health-assistant-cu2e.onrender.com/summarize', { text });
      setSummary(res.data.summary);
    } catch {
      setSummary('Error: Could not connect to backend.');
    }
    setLoading(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card title="Health Record Summarizer" color="white">
      <Textarea
        placeholder="Paste clinical note here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="h-40 mb-3"
      />
      <Button onClick={summarize} disabled={loading || !text} className="w-full  bg-indigo-600 text-white hover:bg-indigo-700 p-2">
        {loading ? 'Summarizing...' : 'Summarize'}
      </Button>

      {summary && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg relative">
          <button
            onClick={copy}
            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          </button>
          <p className="font-medium mb-1">Summary:</p>
          <p className="text-sm whitespace-pre-wrap">{summary}</p>
        </div>
      )}
    </Card>
  );
}