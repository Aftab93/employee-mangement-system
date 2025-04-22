import React from 'react';

const NewTask = () => {
  return (
    <div className="flex-shrink-0 w-[300px] bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between items-center text-sm">
        <span className="bg-white/20 px-3 py-1 rounded-full font-medium">High</span>
        <span className="text-xs opacity-90">Feb 20, 2024</span>
      </div>
      <h2 className="mt-5 text-xl font-bold leading-tight">Make YouTube Video</h2>
      <p className="text-sm mt-3 leading-relaxed text-white/90">
        Record and upload a video explaining the new design system updates and their implementation details.
      </p>

      <div className="mt-5">
        <button className="w-full bg-white text-indigo-600 font-semibold px-4 py-2 rounded-full hover:bg-indigo-100 transition whitespace-nowrap">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
