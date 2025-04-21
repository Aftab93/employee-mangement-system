import React from 'react';

const tasks = [
  {
    id: 1,
    title: 'Make UI Design',
    description: 'Create a responsive UI using Tailwind CSS.',
    date: '2025-04-22',
    employee: 'Aftab Ali',
    category: 'Design',
    priority: 'High',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Build API',
    description: 'Develop backend using Node.js and Express.',
    date: '2025-04-23',
    employee: 'John Doe',
    category: 'Development',
    priority: 'Medium',
    status: 'Completed',
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'In Progress':
      return 'bg-blue-500';
    case 'Completed':
      return 'bg-green-500';
    case 'Pending':
      return 'bg-yellow-500';
    case 'Overdue':
      return 'bg-red-500';
    default:
      return 'bg-gray-400';
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return 'bg-red-500';
    case 'Medium':
      return 'bg-yellow-500';
    case 'Low':
      return 'bg-green-500';
    default:
      return 'bg-gray-400';
  }
};

const AllTasks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {tasks.map((task) => (
        <div key={task.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex justify-between items-center text-sm mb-2">
            <span className={`px-3 py-1 rounded-full text-white text-xs ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
            <span className="text-gray-600">{task.date}</span>
          </div>

          <h2 className="text-xl font-bold">{task.title}</h2>
          <p className="text-sm mt-2 text-gray-700">{task.description}</p>

          <div className="text-sm text-gray-600 mt-4 space-y-1">
            <p><span className="font-medium">Employee:</span> {task.employee}</p>
            <p><span className="font-medium">Category:</span> {task.category}</p>
            <p>
              <span className="font-medium">Status:</span>{' '}
              <span className={`ml-2 px-2 py-1 text-xs text-white rounded-full ${getStatusColor(task.status)}`}>
                {task.status}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTasks;
