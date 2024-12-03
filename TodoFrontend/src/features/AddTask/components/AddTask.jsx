import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTask = () => {
  const navigate = useNavigate();

  const notifySuccess = () => {
    toast.success("Task added successfully!", {
      onClose: () => navigate("/"),
    });
  };
  const notifyError = () => toast.error("Error creating task!");

  const [task, setTask] = useState({
    name: "",
    description: "",
    categoryId: 1,
    priority: "High",
    status: false,
    date: new Date(),
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/Category`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch(notifyError);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "categoryId") {
      setTask((prevState) => ({
        ...prevState,
        categoryId: Number(value),
      }));
    } else {
      setTask((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const onSubmit = async () => {
    axios
      .post(`${config.API_URL}/Task`, task)
      .then(notifySuccess)
      .catch(notifyError);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="font-poppins text-lg">Task Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter task name"
          value={task.name}
          onChange={handleInputChange}
          className="border-2 border-gray-300 outline-none rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-poppins text-lg">Description</label>
        <textarea
          name="description"
          placeholder="Enter task description"
          value={task.description}
          onChange={handleInputChange}
          className="border-2 border-gray-300 outline-none rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
          rows="10"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-poppins text-lg">Select Category</label>
        <select
          name="categoryId"
          value={task.categoryId}
          onChange={handleInputChange}
          className="border-2 border-gray-300 outline-none rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="font-poppins text-lg">Priority</label>
        <select
          name="priority"
          value={task.priority}
          onChange={handleInputChange}
          className="border-2 border-gray-300 outline-none rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="font-poppins text-lg">Date</label>
        <input
          type="date"
          name="date"
          value={task.date}
          onChange={handleInputChange}
          className="border-2 border-gray-300 outline-none rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <button
        onClick={onSubmit}
        className="w-full py-3 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition"
      >
        Add Task
      </button>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default AddTask;
