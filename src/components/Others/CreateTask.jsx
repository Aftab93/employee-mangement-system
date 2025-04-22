import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
// import NewTask from '../TaskList/NewTask';

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [assignTo, setAssignTo] = useState("")
  const [category, setCategory] = useState("")

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
  
    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
  
    const updatedEmployees = userData.map((employee) => {
      if (assignTo.toLowerCase() === employee.firstName.toLowerCase()) {
        return {
          ...employee,
          tasks: [...employee.tasks, task],
          taskCount: {
            ...employee.taskCount,
            newTask: employee.taskCount.newTask + 1,
          }
        };
      }
      return employee;
    });
  
    setUserData(updatedEmployees); // update the context
  
    console.log("All Employees after update:", updatedEmployees);
  
    // Reset form
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };
  
  

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-emerald-600 mb-6">Assign Task</h2>
      <form onSubmit={(e)=>{submitHandler(e)}} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700">Task Title</label>
          <input 
            value={taskTitle}
            onChange={(e)=>setTaskTitle(e.target.value)}
            type="text" 
            placeholder="e.g., Make UI Design" 
            className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Description</label>
          <textarea 
            value={taskDescription}
            onChange={(e)=>setTaskDescription(e.target.value)}
            rows="5" 
            placeholder="Provide details of the task" 
            className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium text-gray-700">Due Date</label>
            <input
              value={taskDate}
              onChange={(e)=>setTaskDate(e.target.value)} 
              type="date" 
              className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Assign To</label>
            <input 
              value={assignTo}
              onChange={(e)=>setAssignTo(e.target.value)}
              type="text" 
              placeholder="Enter employee name" 
              className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Category</label>
          <input 
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            type="text" 
            placeholder="e.g., Design, Development" 
            className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div className="flex justify-end">
          <button 
            type="submit" 
            className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 focus:outline-none transition duration-300"
          >
            Assign Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
