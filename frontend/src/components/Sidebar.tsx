// Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, UserCog, DollarSign, Activity } from 'lucide-react';

const Sidebar = () => {
  // Helper function for NavLink classes to improve readability and maintainability
  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-200 ease-in-out ${
      isActive
        ? // Active link styles: Light blue bg/text in light mode, dark blue bg/lighter blue text in dark mode
          'bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-blue-300 font-medium'
        : // Inactive link styles: Default text in light mode, lighter gray text in dark mode, subtle hover bg change
          'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50' // Added opacity to dark hover
    }`;
  };

  return (
    // Sidebar Container: White background in light mode, dark gray in dark mode. Added vertical border for separation.
    <div className="bg-white dark:bg-gray-900 w-64 shadow-lg flex flex-col h-screen border-r border-gray-200 dark:border-gray-700">
      {/* Logo Section: Blue text in light mode, lighter blue in dark mode. Bottom border adapts to theme. */}
      {/* Added flex-shrink-0 to prevent this section shrinking if nav links overflow */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <NavLink to="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"> {/* Made logo a link to home */}
          <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            HMS
          </h1>
        </NavLink>
      </div>

      {/* Navigation Links: Added padding and overflow handling */}
      <nav className="flex-1 px-2 py-4 overflow-y-auto">
        {/* Patient Dashboard Link */}
        <NavLink
          to="/"
          end // Ensures this link is only active for the exact root path "/"
          className={getNavLinkClass}
        >
          {/* Icon: Added flex-shrink-0 to prevent icon shrinking */}
          <Users className="h-5 w-5 mr-3 flex-shrink-0" />
          <span>Patient Dashboard</span> {/* Wrapped text in span */}
        </NavLink>

        {/* Staff Dashboard Link */}
        <NavLink
          to="/staff"
          className={getNavLinkClass}
        >
          <UserCog className="h-5 w-5 mr-3 flex-shrink-0" />
          <span>Staff Dashboard</span>
        </NavLink>

        {/* Financial Dashboard Link */}
        <NavLink
          to="/financial"
          className={getNavLinkClass}
        >
          <DollarSign className="h-5 w-5 mr-3 flex-shrink-0" />
          <span>Financial Dashboard</span>
        </NavLink>
      </nav>

      {/* Footer section can be added here if needed */}
      {/* e.g., <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-700">...</div> */}
    </div>
  );
};

export default Sidebar;