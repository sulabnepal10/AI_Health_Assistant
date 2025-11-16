import { useTheme } from '../../contenxt/ThemeContext';
import { Moon, Sun, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ toggleSidebar }) {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
            AI Health Assistant
          </Link>
        </div>

        <nav className="hidden lg:flex gap-6">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Home</Link>
          <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Dashboard</Link>
          <a href="https://github.com" className="text-gray-700 dark:text-gray-300">Docs</a>
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggle} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center font-semibold"
            >
              U
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg, shadow-lg">
                <a href="#" className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</a>
                <a href="#" className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}