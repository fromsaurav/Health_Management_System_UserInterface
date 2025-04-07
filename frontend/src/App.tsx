import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PatientDashboard from './pages/PatientDashboard'; // Ensure paths are correct
import StaffDashboard from './pages/StaffDashboard';     // Ensure paths are correct
import FinancialDashboard from './pages/FinancialDashboard'; // Ensure paths are correct
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext'; // Correctly imported

function App() {
  return (
    <ThemeProvider> {/* ThemeProvider wraps everything */}
      <AuthProvider>
        <Router>
          {/* Base layout with dark mode background */}
          <div className="flex h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden"> {/* Added overflow-hidden */}
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden"> {/* Added overflow-hidden */}
              <Header />
              {/* Main content area with its own dark mode background */}
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-800 p-6">
                <Routes>
                  <Route path="/" element={<PatientDashboard />} />
                  <Route path="/staff" element={<StaffDashboard />} />
                  <Route path="/financial" element={<FinancialDashboard />} />
                  {/* Add other routes like Login here, potentially outside the main layout */}
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;