const Sidebar = () => {
    return (
      <div className="w-64 bg-gray-800 text-white">
        <nav>
          <ul>
            <li className="p-4 hover:bg-gray-700">Dashboard</li>
            <li className="p-4 hover:bg-gray-700">Profile</li>
            <li className="p-4 hover:bg-gray-700">Settings</li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Sidebar;