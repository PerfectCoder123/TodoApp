import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Task from "./Task";
import empty_task from "../../../assets/notasks.png";
import config from "../../../config";

const TasksList = ({ selectedDate, searchTerm }) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    navigate("/add");
  };

  useEffect(() => {
    const formattedDate = new Date(selectedDate).toISOString().split("T")[0];
    axios
      .get(`${config.API_URL}/Task/date/${formattedDate}`)
      .then((response) => setTasks(response.data));
  }, [selectedDate]);

  const filteredTasks = tasks.filter(
    (task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Task</h2>
      {filteredTasks.length === 0 ? (
        <div>
          <img src={empty_task} alt="Empty Task" className="max-w-60 mx-auto" />
          <p className="text-center text-gray-500">
            No tasks available. Add a new task!.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} setTasks={setTasks} />
          ))}
        </div>
      )}
      <button
        onClick={handleAddTask}
        className="w-16 h-16 fixed bottom-6 right-10 rounded-full shadow-lg bg-purple-500 text-white text-2xl flex items-center justify-center hover:bg-purple-600"
      >
        +
      </button>
    </div>
  );
};

export default TasksList;
