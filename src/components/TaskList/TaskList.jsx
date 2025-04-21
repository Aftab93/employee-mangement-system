import React from 'react';

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-start gap-5 flex-nowrap bg-white rounded-2xl shadow-lg p-6 mt-6"
    >
      {/* Task Card */}
      <div className="flex-shrink-0 w-[300px] bg-gradient-to-br from-red-400 to-red-600 text-white rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex justify-between items-center text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full font-medium">High</span>
          <span className="text-xs opacity-90">Feb 20, 2024</span>
        </div>
        <h2 className="mt-5 text-xl font-bold leading-tight">Make YouTube Video</h2>
        <p className="text-sm mt-3 leading-relaxed text-white/90">
          Record and upload a video explaining the new design system updates and their implementation details.
        </p>
      </div>

      {/* Additional cards can be duplicated and mapped dynamically later */}
      <div className="flex-shrink-0 w-[300px] bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex justify-between items-center text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full font-medium">Medium</span>
          <span className="text-xs opacity-90">Feb 22, 2024</span>
        </div>
        <h2 className="mt-5 text-xl font-bold leading-tight">Fix Dashboard Bugs</h2>
        <p className="text-sm mt-3 leading-relaxed text-white/90">
          Review and resolve UI issues reported on the admin dashboard in the latest QA round.
        </p>
      </div>

      <div className="flex-shrink-0 w-[300px] bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex justify-between items-center text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full font-medium">Low</span>
          <span className="text-xs opacity-90">Feb 25, 2024</span>
        </div>
        <h2 className="mt-5 text-xl font-bold leading-tight">Update Profile Section</h2>
        <p className="text-sm mt-3 leading-relaxed text-white/90">
          Add profile picture upload and new fields to the user account settings page.
        </p>
      </div>
      <div className="flex-shrink-0 w-[300px] bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex justify-between items-center text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full font-medium">Medium</span>
          <span className="text-xs opacity-90">Feb 22, 2024</span>
        </div>
        <h2 className="mt-5 text-xl font-bold leading-tight">Fix Dashboard Bugs</h2>
        <p className="text-sm mt-3 leading-relaxed text-white/90">
          Review and resolve UI issues reported on the admin dashboard in the latest QA round.
        </p>
      </div>

      <div className="flex-shrink-0 w-[300px] bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex justify-between items-center text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full font-medium">Low</span>
          <span className="text-xs opacity-90">Feb 25, 2024</span>
        </div>
        <h2 className="mt-5 text-xl font-bold leading-tight">Update Profile Section</h2>
        <p className="text-sm mt-3 leading-relaxed text-white/90">
          Add profile picture upload and new fields to the user account settings page.
        </p>
      </div>
      <div className="flex-shrink-0 w-[300px] bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex justify-between items-center text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full font-medium">Medium</span>
          <span className="text-xs opacity-90">Feb 22, 2024</span>
        </div>
        <h2 className="mt-5 text-xl font-bold leading-tight">Fix Dashboard Bugs</h2>
        <p className="text-sm mt-3 leading-relaxed text-white/90">
          Review and resolve UI issues reported on the admin dashboard in the latest QA round.
        </p>
      </div>

      <div className="flex-shrink-0 w-[300px] bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex justify-between items-center text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full font-medium">Low</span>
          <span className="text-xs opacity-90">Feb 25, 2024</span>
        </div>
        <h2 className="mt-5 text-xl font-bold leading-tight">Update Profile Section</h2>
        <p className="text-sm mt-3 leading-relaxed text-white/90">
          Add profile picture upload and new fields to the user account settings page.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
