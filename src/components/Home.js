import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Welcome to Our Web Application</h1>
      <p className="mb-4 md:mb-6 text-base md:text-lg text-center">Please log in or sign up to access the dashboard.</p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto">Login</button>
        </Link>
        <Link to="/signup">
          <button className="bg-green-500 text-white px-4 py-2 rounded w-full md:w-auto">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;