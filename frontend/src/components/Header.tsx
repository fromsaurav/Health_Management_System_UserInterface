import React from 'react';
import { Bell, Search, User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    // Added dark mode background
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center flex-1">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search..."
              // Added dark mode styles for input: background, border, text, placeholder
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Adjusted icon color for dark mode */}
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* Adjusted icon colors and hover states for dark mode */}
          <button className="relative p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
            <Bell className="h-6 w-6" />
            {/* Notification dot usually remains visually consistent */}
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
            <Settings className="h-6 w-6" />
          </button>

          {/* Adjusted border color, text colors, and avatar styles for dark mode */}
          <div className="flex items-center space-x-3 border-l pl-4 border-gray-200 dark:border-gray-600">
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {user?.email}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Doctor</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center">
              <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          {/* Adjusted logout icon color and hover state for dark mode */}
          <button
            onClick={handleSignOut}
            className="p-2 text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400"
          >
            <LogOut className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;