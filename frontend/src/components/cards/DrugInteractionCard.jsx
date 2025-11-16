import { useState } from 'react';
import axios from 'axios';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Copy, Check, Loader2 } from 'lucide-react';

export default function DrugInteractionCard() {
  const [drug1, setDrug1] = useState('');
  const [drug2, setDrug2] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const lookup = async () => {
    if (!drug1.trim() || !drug2.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post('https://ai-health-assistant-cu2e.onrender.com/drug-check', { drug1, drug2 });
      setInfo(res.data.interaction);
    } catch {
      setInfo('Unable to fetch interaction data.');
    } finally {
      setLoading(false);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(info);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card title="Drug Interaction Finder" color="teal">
      <div className="grid grid-cols-1 gap-3 mb-3">
        <Input placeholder="Drug 1 (e.g. aspirin)" value={drug1} onChange={(e) => setDrug1(e.target.value)} />
        <Input
          placeholder="Drug 2 (e.g. ibuprofen)"
          value={drug2}
          onChange={(e) => setDrug2(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !loading && lookup()}
        />
      </div>

      <Button onClick={lookup} disabled={loading || !drug1 || !drug2} className="w-full  bg-indigo-600 text-white hover:bg-indigo-700 p-2">
        {loading ? (
          <>
            <Loader2 className="inline w-4 h-4 mr-2 animate-spin" />
            Looking up…
          </>
        ) : (
          'Check Interaction'
        )}
      </Button>

      {info && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg relative">
          <button
            onClick={copy}
            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          </button>
          <p className="whitespace-pre-wrap text-sm">{info}</p>
        </div>
      )}
    </Card>
  );
}