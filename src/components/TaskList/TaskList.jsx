import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-start gap-5 flex-nowrap bg-white rounded-2xl shadow-lg p-6 mt-6"
    >
      {data.tasks.map((task, index) => {
        if (task.active) {
          return <AcceptTask key={index} data={task} />;
        } else if (task.newTask) {
          return <NewTask key={index} data={task} />;
        } else if (task.completed) {
          return <CompleteTask key={index} data={task} />;
        } else if (task.failed) {
          return <FailedTask key={index} data={task} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default TaskList;
