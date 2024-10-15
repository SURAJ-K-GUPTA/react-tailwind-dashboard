import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import ForgotPassword from './components/Auth/ForgotPassword'; // Import the ForgotPassword component
import Home from './components/Home'; // Import the Home component
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

const App = () =>{
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<Signup />} /> {/* Signup page */}
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Forgot Password page */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
