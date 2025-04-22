import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  const renderedTasks = data.tasks.map((e, index) => {
    if (e.active) {
      return <AcceptTask key={index} data={e} />;
    }
    if (e.newTask) {
      return <NewTask key={index} data={e} />;
    }
    if (e.completed) {
      return <CompleteTask key={index} data={e} />;
    }
    if (e.failed) {
      return <FailedTask key={index} data={e} />;
    }
    return null;
  }).filter(Boolean); // removes any nulls

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-start gap-5 flex-nowrap bg-white rounded-2xl shadow-lg p-6 mt-6"
    >
      {renderedTasks.length > 0 ? (
        renderedTasks
      ) : (
        <div className="text-center w-full text-gray-400 font-semibold text-lg">
          No tasks available
        </div>
      )}
    </div>
  );
};

export default TaskList;
