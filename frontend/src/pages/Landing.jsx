import { ArrowRight, Brain, Shield, FileSearch, Pill, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Landing() {
  const features = [
    { icon: Brain, title: 'Smart Summaries', desc: 'Condense long clinical notes instantly.' },
    { icon: Stethoscope, title: 'Symptom Advisor', desc: 'Chat-based triage & guidance.' },
    { icon: FileSearch, title: 'Research Assistant', desc: 'Find latest papers with AI.' },
    { icon: Shield, title: 'PHI Checker', desc: 'Detect & redact protected health info.' },
    { icon: Pill, title: 'Drug Interactions', desc: 'Check safety of drug combos.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <section className="pt-32 pb-48 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              AI-Powered Health Assistant
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Powered by LLaMA 3
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition"
            >
              Launch Dashboard <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="md:w-2/5 mt-12 md:mt-0">
            <img
              src="/mock.png"
              alt="AI Health Assistant"
              className="w-full h-auto max-w-sm md:max-w-md mx-auto"
            />
          </div>

        </div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <f.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Transform Healthcare?</h2> {/* Added text color */}
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-teal-700"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}