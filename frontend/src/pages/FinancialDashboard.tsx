import { Activity, DollarSign, TrendingUp, Users } from 'lucide-react';

const FinancialDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Financial Dashboard</h1>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Increased gap */}
        {/* Total Revenue Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">$124,592</p>
              <p className="text-sm text-green-600 dark:text-green-500">+12.5% from last month</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-500 dark:text-blue-400" />
          </div>
        </div>

        {/* Outstanding Payments Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Outstanding Payments</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">$23,456</p>
              <p className="text-sm text-red-600 dark:text-red-500">8 pending invoices</p>
            </div>
            <Activity className="h-8 w-8 text-orange-500 dark:text-orange-400" />
          </div>
        </div>

        {/* Patient Count Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Patient Count</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">1,284</p>
              <p className="text-sm text-green-600 dark:text-green-500">+24 this month</p>
            </div>
            <Users className="h-8 w-8 text-green-500 dark:text-green-400" />
          </div>
        </div>

        {/* Growth Rate Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Growth Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">15.8%</p>
              <p className="text-sm text-green-600 dark:text-green-500">+2.3% from last month</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-500 dark:text-purple-400" />
          </div>
        </div>
      </div>

      {/* Recent Transactions Table Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"> {/* Moved overflow-hidden here */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Transactions</h2>
          <div className="overflow-x-auto -mx-6 px-6"> {/* Handle potential horizontal scroll */}
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              {/* Table Header */}
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              {/* Table Body */}
              {/* Removed bg-white from tbody as the card provides the background */}
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {/* Example Row 1 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">2025-01-15</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">John Smith</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">Consultation</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">$150.00</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Paid</span>
                  </td>
                </tr>
                {/* Example Row 2 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">2025-01-14</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">Sarah Johnson</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">Lab Test</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">$275.00</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Pending</span>
                  </td>
                </tr>
                {/* Example Row 3 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">2025-01-13</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">Michael Brown</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">X-Ray</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">$350.00</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Overdue</span> {/* Example: Added an overdue status */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;