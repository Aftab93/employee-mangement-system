import React from 'react';
import Header from '../Others/Header';
import TaskListNumbers from '../Others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({data}) => {
  // console.log(data)
  return (
    <div className="min-h-screen bg-gray-100">
      <Header data={data} />
      <main className="px-6 py-8">
        <TaskListNumbers data={data} />
        <TaskList data={data} />
      </main>
    </div>
  );
};

export default EmployeeDashboard;
