import { useState } from 'react';
import axios from 'axios';
import Card from '../ui/Card';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { Copy, Check, Loader2 } from 'lucide-react';

export default function PrivacyCheckerCard() {
  const [text, setText] = useState('');
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const check = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8000/privacy', { text });
      setReport(res.data);
    } catch {
      setReport({ error: 'Backend error' });
    } finally {
      setLoading(false);
    }
  };

  const copyReport = () => {
    const txt = report.error
      ? report.error
      : `Detected PHI:\n${report.spacy.map(([e]) => e).join('\n')}\n\nLLM Advice:\n${report.llm}`;
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card title="Privacy (PHI) Checker" color="red">
      <Textarea
        placeholder="Paste clinical text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="h-40 mb-3"
      />

      <Button onClick={check} disabled={loading || !text} className="w-full bg-indigo-600 text-white hover:bg-indigo-700 p-2">
        {loading ? (
          <>
            <Loader2 className="inline w-4 h-4 mr-2 animate-spin" />
            Checking…
          </>
        ) : (
          'Check PHI'
        )}
      </Button>

      {report && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg relative">
          <button
            onClick={copyReport}
            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          </button>

          {report.error ? (
            <p className="text-red-600">{report.error}</p>
          ) : (
            <>
              <p className="font-medium mb-2">Detected PHI:</p>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                {report.spacy.map(([entity, label], i) => (
                  <li key={i}>
                    <span className="text-red-600 font-medium">{entity}</span>{' '}
                    <span className="text-xs text-gray-500">({label})</span>
                  </li>
                ))}
              </ul>

              <p className="font-medium mb-1">LLM Advice:</p>
              <p className="whitespace-pre-wrap text-sm">{report.llm}</p>
            </>
          )}
        </div>
      )}
    </Card>
  );
}