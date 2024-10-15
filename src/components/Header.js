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
    <header className="bg-gray-100 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold"><Link to="/">My Application</Link></h1>
      <div className="flex items-center">
        <span className="text-sm mr-4">Welcome, {user?.username || 'User'}</span>
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;