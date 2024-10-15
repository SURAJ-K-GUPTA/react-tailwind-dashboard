import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { login: setAuthUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setAuthUser(data);  // Set the logged-in user in context
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setError(data.error);  // Handle error from server
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
  <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
    {error && <p className="text-red-500">{error}</p>}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Username</label>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded mt-1"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        className="w-full p-2 border border-gray-300 rounded mt-1"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Password</label>
      <input
        type="password"
        className="w-full p-2 border border-gray-300 rounded mt-1"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
      <input
        type="password"
        className="w-full p-2 border border-gray-300 rounded mt-1"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your password"
      />
    </div>
    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign Up</button>
    <p className="mt-4 text-sm">
      Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
    </p>
  </form>
</div>

  );
};

export default Signup;
