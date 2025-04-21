import React from 'react';
import Header from '../Others/Header';
import TaskListNumbers from '../Others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="px-6 py-8">
        <TaskListNumbers />
        <TaskList />
      </main>
    </div>
  );
};

export default EmployeeDashboard;
