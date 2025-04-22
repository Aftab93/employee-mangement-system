import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div
      id="tasklist"
      className="space-y-4 p-2 bg-gray-100 rounded-xl shadow-inner"
    >
      {/* Header Row */}
      <div className="flex justify-between items-center bg-emerald-600 text-white font-semibold py-2 px-4 rounded-t-lg shadow-md">
        <div className="flex-1 text-center">Employee Name</div>
        <div className="flex-1 text-center">New Task</div>
        <div className="flex-1 text-center">Active Task</div>
        <div className="flex-1 text-center">Completed</div>
        <div className="flex-1 text-center">Failed</div>
      </div>

      {/* Scrollable Card List */}
      <div
        className="h-[150px] overflow-y-auto no-scrollbar"
        style={{
          scrollbarWidth: 'none', /* For Firefox */
          msOverflowStyle: 'none', /* For IE and Edge */
        }}
      >
        {userData.map((user, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition mb-2"
          >
            {/* Employee Name */}
            <div className="flex-1 text-center font-bold">{user.firstName}</div>

            {/* New Task */}
            <div className="flex-1 text-center">
              {/* Replace this with the actual task data */}
              <span className="text-green-500 text-xl px-2 py-1 font-semibold rounded-full">
                {user.taskCount.newTask}
              </span>
            </div>

            {/* Active Task */}
            <div className="flex-1 text-center">
              {/* Replace this with the actual task data */}
              <span className="text-blue-500 text-xl px-2 py-1 font-semibold rounded-full">
              {user.taskCount.active}
              </span>
            </div>

            {/* Completed Task */}
            <div className="flex-1 text-center">
              {/* Replace this with the actual task data */}
              <span className="text-yellow-500 text-xl px-2 py-1 font-semibold rounded-full">
              {user.taskCount.completed}
              </span>
            </div>

            {/* Failed Task */}
            <div className="flex-1 text-center">
              {/* Replace this with the actual task data */}
              <span className="text-red-500 text-xl font-semibold px-2 py-1 rounded-full">
              {user.taskCount.failed}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
