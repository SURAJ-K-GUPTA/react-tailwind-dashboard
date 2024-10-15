import Sidebar from '../Sidebar';
import Header from '../Header';
import { useState } from 'react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
          {/* Task Manager Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Task Manager</h2>
            <div className="mb-4">
              <input
                type="text"
                className="border p-2 rounded mr-2"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Add a new task"
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={addTask}
              >
                Add Task
              </button>
            </div>
            <ul className="list-disc ml-6">
              {tasks.map((task, index) => (
                <li key={index} className="mb-2">
                  {task}
                  <button
                    className="bg-red-500 text-white px-2 py-1 ml-4 rounded"
                    onClick={() => removeTask(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;