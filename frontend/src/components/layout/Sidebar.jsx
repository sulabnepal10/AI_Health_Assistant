import { X, Home, LayoutDashboard, FileText, Shield, Pill, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar({ open, toggle }) {
  const links = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/docs', icon: FileText, label: 'Documentation' },
    { to: '/contact', icon: Mail, label: 'Contact' },
    { to: '/privacy', icon: Shield, label: 'Privacy Policy' },
  ];

  return (
    <>
      {/* Overlay */}
      {open && <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={toggle} />}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transform transition-transform z-50 ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
      >
        <div className="relative flex flex-col items-center p-6 border-b dark:border-gray-700">
          {/* Logo */}
          <Link to="/" className="mb-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-20 w-20 rounded-full object-cover shadow-lg border-2 border-indigo-500"
            />
          </Link>

          {/* Close button on mobile */}
          <button onClick={toggle} className="lg:hidden absolute top-4 right-4">
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
        <nav className="p-4">
          {links.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              onClick={toggle}
              className="flex items-center gap-3 px-3 py-2 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900"
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}