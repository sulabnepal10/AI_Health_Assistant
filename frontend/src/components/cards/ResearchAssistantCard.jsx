import { useState } from 'react';
import axios from 'axios';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Copy, Check, Loader2, Maximize2, Minimize2 } from 'lucide-react';

export default function ResearchAssistantCard() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const search = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post('https://ai-health-assistant-cu2e.onrender.com/papers', { query });
      setResult(res.data.response);
    } catch {
      setResult('Error contacting the backend.');
    } finally {
      setLoading(false);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card title="Research Paper Assistant" color="purple">

      <div className="flex justify-end mb-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-gray-600 hover:text-black dark:text-gray-300"
        >
          {expanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>

      <div className="flex gap-2 mb-3">
        <Input
          placeholder="e.g. COVID-19 vaccine efficacy"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !loading && search()}
        />
        <Button onClick={search} disabled={loading || !query}>
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Search'}
        </Button>
      </div>

      {loading && (
        <div className="space-y-2 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          ))}
        </div>
      )}

      {result && !loading && (
        <div
          className={`
            mt-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg relative
            overflow-y-auto transition-all duration-300
            ${expanded ? 'h-[70vh]' : 'max-h-64'}
          `}
        >
          <button
            onClick={copy}
            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

          <p className="whitespace-pre-wrap text-sm">{result}</p>
        </div>
      )}
    </Card>
  );
}
