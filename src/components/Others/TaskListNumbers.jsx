import React from 'react';

const TaskListNumbers = ({data}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
      <div className="py-6 px-9 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold">{data.taskCount.newTask}</h2>
        <h3 className="text-xl font-medium mt-2">New Task</h3>
      </div>
      <div className="py-6 px-9 rounded-2xl bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-medium mt-2">Failed</h3>
      </div>
      <div className="py-6 px-9 rounded-2xl bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-medium mt-2">Completed</h3>
      </div>
      <div className="py-6 px-9 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold">{data.taskCount.active}</h2>
        <h3 className="text-xl font-medium mt-2">Pending</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
