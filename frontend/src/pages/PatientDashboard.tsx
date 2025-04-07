import { Users, Calendar, BedDouble, Mail, User, Search, Plus } from 'lucide-react';

const PatientDashboard = () => {
  // Helper for status badge classes
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Add Patient */}
      <div className="flex flex-wrap justify-between items-center gap-4"> {/* Added flex-wrap and gap */}
        {/* Search Input */}
        <div className="relative w-full sm:w-96"> {/* Responsive width */}
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
        </div>
        {/* Add Patient Button */}
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="h-5 w-5" />
          Add New Patient
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Patients Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 dark:bg-gray-700 rounded-lg"> {/* Adjusted padding & dark bg */}
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Patients</h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">1,234</p>
            </div>
          </div>
        </div>

        {/* Appointments Today Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 dark:bg-gray-700 rounded-lg">
              <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Appointments Today</h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">42</p>
            </div>
          </div>
        </div>

        {/* Admitted Patients Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 dark:bg-gray-700 rounded-lg">
              <BedDouble className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Admitted Patients</h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">85</p>
            </div>
          </div>
        </div>

        {/* Pending Reports Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 dark:bg-gray-700 rounded-lg">
              <Mail className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Reports</h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Patients & Upcoming Appointments Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Patients Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Recent Patients</h2>
            <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'John Doe', appointment: 'Checkup', time: '10:00 AM', status: 'Completed' },
              { name: 'Jane Smith', appointment: 'Follow-up', time: '11:30 AM', status: 'In Progress' },
              { name: 'Robert Johnson', appointment: 'Consultation', time: '2:00 PM', status: 'Scheduled' }
            ].map((patient, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="min-w-0 flex-1"> {/* Prevent text overflow issues */}
                    <p className="font-medium text-gray-900 dark:text-gray-100 truncate">{patient.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{patient.appointment} • {patient.time}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${getStatusBadgeClass(patient.status)}`}>
                  {patient.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Appointments Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Upcoming Appointments</h2>
            <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Sarah Wilson', type: 'Follow-up', time: '2:30 PM', doctor: 'Dr. Anderson' },
              { name: 'Michael Brown', type: 'Consultation', time: '3:15 PM', doctor: 'Dr. Martinez' },
              { name: 'Emily Davis', type: 'Check-up', time: '4:00 PM', doctor: 'Dr. Thompson' }
            ].map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 dark:text-gray-100 truncate">{appointment.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{appointment.type} • {appointment.time}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 truncate">{appointment.doctor}</p>
                  </div>
                </div>
                <button className="px-3 py-1 text-sm text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/50 hover:bg-blue-200 dark:hover:bg-blue-900/70 rounded-full transition-colors whitespace-nowrap">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;