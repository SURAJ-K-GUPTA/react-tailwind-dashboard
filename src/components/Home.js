import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Web Application</h1>
      <p className="mb-6 text-lg">Please log in or sign up to access the dashboard.</p>
      <div className="flex space-x-4">
        <Link to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </Link>
        <Link to="/signup">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;