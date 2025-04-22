import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (!props.data) {
      setUserName('Admin');
    } else {
      setUserName(props.data.firstName);
    }
  }, [props.data]);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser();
  };

  return (
    <header className="w-full bg-emerald-600 text-white px-6 py-4 shadow-md flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold leading-tight">
          Hello, <br />
          <span className="text-3xl font-bold">{userName}</span>
        </h1>
      </div>

      <button
        onClick={logOutUser}
        className="bg-white text-emerald-600 font-medium px-4 py-2 rounded-full hover:bg-emerald-100 transition"
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;
