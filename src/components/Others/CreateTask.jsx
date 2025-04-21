import React from 'react';

const CreateTask = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-emerald-600 mb-6">Assign Task</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700">Task Title</label>
          <input 
            type="text" 
            placeholder="e.g., Make UI Design" 
            className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Description</label>
          <textarea 
            rows="5" 
            placeholder="Provide details of the task" 
            className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium text-gray-700">Due Date</label>
            <input 
              type="date" 
              className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Assign To</label>
            <input 
              type="text" 
              placeholder="Enter employee name" 
              className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Category</label>
          <input 
            type="text" 
            placeholder="e.g., Design, Development" 
            className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div className="flex justify-end">
          <button 
            type="submit" 
            className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 focus:outline-none transition duration-300"
          >
            Assign Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
