import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-emerald-600 text-white px-6 py-4 shadow-md flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold leading-tight">
          Hello, <br />
          <span className="text-3xl font-bold">Aftab Ali</span>
        </h1>
      </div>

      {/* Optional: Add a placeholder avatar or icon */}
      {/* <img src="/path/to/avatar.png" alt="Avatar" className="w-10 h-10 rounded-full" /> */}

      <button className="bg-white text-emerald-600 font-medium px-4 py-2 rounded-full hover:bg-emerald-100 transition">
        Log Out
      </button>
    </header>
  );
};

export default Header;
