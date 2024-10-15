import { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate checking if the email exists
    if (email) {
      setMessage('If this email exists in our system, a password reset link will be sent.');
    } else {
      setMessage('Please enter a valid email.');
    }

    setEmail(''); // Clear the input field
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
        {message && <p className="text-green-500">{message}</p>}
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
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Send Reset Link</button>
        <p className="mt-4 text-sm">
          <a href="/login" className="text-blue-500">Back to Login</a>
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;