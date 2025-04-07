import { UserCog, Clock, Building, Bell, Calendar, User, Users } from 'lucide-react';

const StaffDashboard = () => {
  // Helper for staff status badges
  const getStaffStatusClass = (status: string) => {
    switch (status) {
      case 'On Call':
        return 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300';
      case 'Available':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300';
      case 'Busy':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300';
      case 'On Leave':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  // Helper for notification icons
  const getNotificationStyle = (type: string) => {
    switch (type) {
      case 'urgent':
        return {
          bg: 'bg-red-100 dark:bg-red-900/40',
          iconColor: 'text-red-500 dark:text-red-400'
        };
      case 'warning':
        return {
          bg: 'bg-yellow-100 dark:bg-yellow-900/40',
          iconColor: 'text-yellow-500 dark:text-yellow-400'
        };
      case 'info':
      default:
        return {
          bg: 'bg-blue-100 dark:bg-blue-900/40',
          iconColor: 'text-blue-500 dark:text-blue-400'
        };
    }
  };


  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4"> {/* Added flex-wrap and gap */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Staff Dashboard</h1>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transition-colors">
          <UserCog className="h-5 w-5" />
          Add New Staff
        </button>
      </div>

      {/* Staff Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Staff Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Staff</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">248</p>
              <p className="text-sm text-green-600 dark:text-green-500">+12 this month</p>
            </div>
            <Users className="h-8 w-8 text-blue-500 dark:text-blue-400" />
          </div>
        </div>

        {/* On Duty Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">On Duty</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">145</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">Current shift</p> {/* Adjusted color */}
            </div>
            <Clock className="h-8 w-8 text-green-500 dark:text-green-400" />
          </div>
        </div>

        {/* Departments Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Departments</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">12</p>
              <p className="text-sm text-purple-600 dark:text-purple-400">Active units</p> {/* Adjusted color */}
            </div>
            <Building className="h-8 w-8 text-purple-500 dark:text-purple-400" />
          </div>
        </div>

        {/* Leave Requests Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Leave Requests</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">8</p>
              <p className="text-sm text-orange-600 dark:text-orange-400">Pending approval</p> {/* Adjusted color */}
            </div>
            <Calendar className="h-8 w-8 text-orange-500 dark:text-orange-400" />
          </div>
        </div>
      </div>

      {/* Staff List and Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Staff Members Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Active Staff Members</h2>
            <div className="space-y-4">
              {[
                { name: 'Dr. Sarah Wilson', role: 'Cardiologist', status: 'On Call' },
                { name: 'Dr. James Murphy', role: 'Neurologist', status: 'Available' },
                { name: 'Nurse Emily Chen', role: 'Head Nurse', status: 'Busy' },
                { name: 'Dr. Michael Brown', role: 'Pediatrician', status: 'On Leave' },
              ].map((staff, index) => (
                <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                  <div className="flex items-center space-x-4 min-w-0"> {/* Added min-w-0 */}
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div className="min-w-0 flex-1"> {/* Added min-w-0 flex-1 */}
                      <p className="font-medium text-gray-900 dark:text-gray-100 truncate">{staff.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{staff.role}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${getStaffStatusClass(staff.status)}`}>
                    {staff.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Notifications Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Notifications</h2>
            <div className="space-y-4">
              {[
                { title: 'Emergency Department Meeting', time: '10 minutes ago', type: 'urgent' },
                { title: 'New Schedule Posted', time: '1 hour ago', type: 'info' },
                { title: 'Equipment Maintenance', time: '2 hours ago', type: 'warning' },
                { title: 'Staff Training Update', time: '3 hours ago', type: 'info' },
              ].map((notification, index) => {
                const styles = getNotificationStyle(notification.type);
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors"> {/* Use items-start for better alignment */}
                    <div className={`p-2 rounded-full flex-shrink-0 ${styles.bg}`}>
                      <Bell className={`h-5 w-5 ${styles.iconColor}`} />
                    </div>
                    <div className="min-w-0 flex-1"> {/* Added min-w-0 flex-1 */}
                      <p className="font-medium text-gray-900 dark:text-gray-100">{notification.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{notification.time}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;