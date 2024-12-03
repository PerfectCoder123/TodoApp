import React, { useState, useRef, useEffect } from "react";
import options from "../../../assets/options.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../../../config";
import Calendar from "../../../assets/calendar.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tasktimeline = ({ task, index }) => {
  const notifySuccess = (message, onClose) => {
    toast.success(message, {
      onClose: onClose,
    });
  };
  const notifyError = () => toast.error("Error creating task!");

  const navigate = useNavigate();

  const [showOptions, setShowOptions] = useState(false);

  const onMarkComplete = () => {
    axios
      .put(`${config.API_URL}/Task/${task.id}`, { ...task, status: true })
      .then(() => {
        notifySuccess("Task marked as complete");
      })
      .catch(notifyError);
  };
  const onMarkIncomplete = () => {
    axios
      .put(`${config.API_URL}/Task/${task.id}`, { ...task, status: false })
      .then(() => {
        notifySuccess("Task marked as Incomplete");
      })
      .catch(notifyError);
  };
  const onEdit = () => {
    navigate("/edittask", { state: { task } });
  };

  const onDelete = () => {
    axios
      .delete(`${config.API_URL}/Task/${task.id}`)
      .then(() => {
        notifySuccess("Task deleted successfully", () => {
          navigate("/", { replace: true });
        });
      })
      .catch(notifyError);
  };

  return (
    <div
      key={task.id}
      className={`flex items-start mb-4 ${
        index % 2 === 1 ? "md:justify-self-end" : ""
      }`}
    >
      <div className="bg-white shadow-md p-4 rounded-lg w-full max-w-lg md:w-80 relative">
        <h3 className="flex justify-between font-semibold text-xl">
          {task.name}
          <img
            src={options}
            alt="Options"
            className="w-5 h-5 cursor-pointer"
            onClick={() => setShowOptions(!showOptions)}
          />
        </h3>
        <p className="flex items-center gap-2 text-lg text-gray-500 mt-2">
          <img src={Calendar} alt="Calendar icon" className="w-5 h-5" />
          {new Date(task.date).toLocaleDateString()}
        </p>
        <p
          className="text-md font-poppins mt-2"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
            lineHeight: "1.5rem",
            minHeight: "3rem",
          }}
        >
          {task.description}
        </p>

        {showOptions && (
          <div className="absolute top-10 right-4 bg-white shadow-xl border rounded-lg font-poppins text-xs w-40 z-10">
            <ul>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onMarkComplete(task.id);
                  setShowOptions(false);
                }}
              >
                Mark as Complete
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onMarkIncomplete(task.id);
                  setShowOptions(false);
                }}
              >
                Mark as Incomplete
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onEdit(task.id);
                  setShowOptions(false);
                }}
              >
                Edit
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onDelete(task.id);
                  setShowOptions(false);
                }}
              >
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default Tasktimeline;
