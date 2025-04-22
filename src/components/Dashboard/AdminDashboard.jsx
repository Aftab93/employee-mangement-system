import React from 'react';
import Header from '../Others/Header';
import CreateTask from '../Others/CreateTask';
import AllTasks from '../Others/AllTasks';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="px-6 py-8 flex flex-col gap-4">
        <CreateTask />
        <AllTasks />
      </main>
    </div>
  );
};

export default AdminDashboard;
