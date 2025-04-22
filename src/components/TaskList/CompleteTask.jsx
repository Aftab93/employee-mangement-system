import React from 'react';

const CompleteTask = ({ data }) => {
  if (!data) return null;

  return (
    <div className="flex-shrink-0 w-[300px] bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between items-center text-sm">
        <span className="bg-white/20 px-3 py-1 rounded-full font-medium">{data.category}</span>
        <span className="text-xs opacity-90">{data.date}</span>
      </div>
      <h2 className="mt-5 text-xl font-bold leading-tight">{data.title}</h2>
      <p className="text-sm mt-3 leading-relaxed text-white/90">{data.description}</p>

      <div className="mt-5">
        <button className="w-full bg-white text-green-600 font-semibold px-4 py-2 rounded-full hover:bg-green-100 transition whitespace-nowrap">
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
