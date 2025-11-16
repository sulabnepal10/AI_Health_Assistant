import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-indigo-400 mb-3">
            AI Health Assistant
          </h3>
          <p className="text-sm">
            Powered by LLaMA 3 + LangChain
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-indigo-400">Home</a></li>
            <li><a href="/dashboard" className="hover:text-indigo-400">Dashboard</a></li>
            <li><a href="/docs" className="hover:text-indigo-400">Documentation</a></li>
            <li><a href="/privacy" className="hover:text-indigo-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm flex items-center gap-2">
            <Mail className="w-4 h-4" />
            support@aihealth.com
          </p>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-indigo-400"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-indigo-400"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-indigo-400"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs">
        © {new Date().getFullYear()} AI Health Assistant. All rights reserved.
      </div>
    </footer>
  );
}