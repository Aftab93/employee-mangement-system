import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    console.log(`Email is ${email} and Password is ${password}`);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-800">
      <div className="backdrop-blur-md bg-white/10 border border-white/30 shadow-xl p-10 rounded-3xl w-full max-w-md">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">Welcome Back</h2>
        <form onSubmit={submitHandler} className="flex flex-col space-y-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full text-white placeholder:text-gray-300 bg-white/10 backdrop-blur-md border border-white/30 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-white"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-white placeholder:text-gray-300 bg-white/10 backdrop-blur-md border border-white/30 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-white"
            type="password"
            placeholder="Enter password"
          />
          <button
            type="submit"
            className="w-full text-white bg-white/20 hover:bg-white/30 transition-all duration-200 font-semibold rounded-full py-3"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
