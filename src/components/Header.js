import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <header className="bg-gray-100 p-4 flex flex-col sm:flex-row justify-between items-center">
  <h1 className="text-xl font-bold mb-2 sm:mb-0">
    <Link to="/">My Application</Link>
  </h1>
  <div className="flex flex-col sm:flex-row items-center">
    <span className="text-sm mb-2 sm:mb-0 sm:mr-4">Welcome, {user?.username || 'User'}</span>
    <button 
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto"
    >
      Logout
    </button>
  </div>
</header>

  );
}

export default Header;