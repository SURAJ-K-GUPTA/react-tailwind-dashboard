import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Updated imports for Heroicons v2

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="md:hidden absolute top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <XMarkIcon className="h-8 w-8 text-gray-800" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-gray-800" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform md:relative md:translate-x-0 md:w-64 w-64 md:min-h-screen`}
      >
        <nav>
          <ul className="flex flex-col p-4">
            <li className="p-4 hover:bg-gray-700">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
