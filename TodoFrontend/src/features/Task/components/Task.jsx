import React, { useEffect } from "react";
import axios from "axios";
import config from "../../../config";

const Task = ({ task, setTasks }) => {
  const onTaskClick = async (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === taskId ? { ...t, status: !t.status } : t))
    );
  };

  useEffect(() => {
    axios.put(`${config.API_URL}/Task/${task.id}`, task);
  }, [task]);

  const priorityColors = {
    High: "border-pink-500 bg-pink-50",
    Medium: "border-orange-500 bg-orange-50",
    Low: "border-purple-500 bg-purple-50",
  };

  const checkboxColors = {
    High: "text-pink-500 focus:ring-pink-500 accent-pink-500",
    Medium: "text-orange-500 focus:ring-orange-500 accent-orange-600",
    Low: "text-purple-500 focus:ring-purple-500 accent-purple-500",
  };

  return (
    <div
      className={`p-4 rounded-lg border-2 shadow-md flex justify-between items-center cursor-pointer ${
        priorityColors[task.priority]
      }`}
    >
      <div
        onClick={() => onTaskClick(task.id)}
        className="flex-1 cursor-pointer"
      >
        <h3 className="font-semibold text-lg">{task.name}</h3>
        <p
          className="text-sm text-gray-500 mt-1"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 1,
            lineHeight: "1.5rem",
          }}
        >
          {task.description}
        </p>
      </div>

      <input
        type="checkbox"
        checked={task.status}
        onChange={() => onTaskClick(task.id)}
        className={`w-6 h-6 cursor-pointer rounded-md border-2 focus:ring-2 ${
          checkboxColors[task.priority]
        }`}
      />
    </div>
  );
};

export default Task;
