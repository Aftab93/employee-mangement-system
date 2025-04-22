import React from 'react';
import Header from '../Others/Header';
import TaskListNumbers from '../Others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  // console.log(data)
  return (
    <div className="min-h-screen bg-gray-100">
      <Header changeUser={props.changeUser} data={props.data} />
      <main className="px-6 py-8">
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
      </main>
    </div>
  );
};

export default EmployeeDashboard;
