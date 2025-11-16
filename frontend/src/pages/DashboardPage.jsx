import Dashboard from '../components/Dashboard';
import { Activity, AlertCircle, CheckCircle, Shield } from 'lucide-react';
import { useStats } from '../contenxt/StatsContext';

export default function DashboardPage() {
  const { summaryCount, phiCheckCount } = useStats();
  const stats = [
    { label: 'Summaries Today', value: summaryCount, icon: CheckCircle, color: 'text-green-600' },
    { label: 'PHI Checks', value: phiCheckCount, icon: Shield, color: 'text-red-600' },
    { label: 'Active Users', value: '1', icon: Activity, color: 'text-indigo-600' },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-white">
        {stats.map((s, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex items-center gap-4">
            <s.icon className={`w-10 h-10 ${s.color}`} />
            <div>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-gray-600 dark:text-gray-400">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <Dashboard />
    </div>
  );
}