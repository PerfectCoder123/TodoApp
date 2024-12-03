import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import config from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditTask = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const notifySuccess = () => {
    toast.success("Task updated successfully!", {
      onClose: () => navigate("/"),
    });
  };
  const notifyError = () => toast.error("Error updating task!");
  const { task: initialTask } = location.state || {};

  const [task, setTask] = useState(
    initialTask || {
      name: "",
      description: "",
      categoryId: 1,
      priority: "High",
      status: false,
      date: new Date().toISOString().split("T")[0],
    }
  );

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/Category`)
      .then((response) => setCategories(response.data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: name === "categoryId" ? Number(value) : value,
    }));
  };

  const onSubmit = async () => {
    try {
      await axios
        .put(`${config.API_URL}/Task/${task.id}`, task)
        .then(notifySuccess);
    } catch (error) {
      notifyError();
    }
  };

  return (
    <div className="w-full max-w-4xl bg-white flex flex-col items-center p-5 mx-auto">
      <h1 className="text-2xl font-bold mb-5">Edit Task</h1>
      <div className="flex flex-col gap-7 w-full">
        <div className="flex flex-col">
          <label className="font-poppins text-lg">Task Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter task name"
            value={task.name}
            onChange={handleInputChange}
            className="border-2 border-gray-300 outline-none rounded-lg p-3 focus:ring-2 focus:ring-purple-500 w-full"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-poppins text-lg">Description</label>
          <textarea
            name="description"
            placeholder="Enter task description"
            value={task.description}
            onChange={handleInputChange}
            className="border-2 border-gray-300 outline-none rounded-lg p-3 focus:ring-2 focus:ring-purple-500 w-full"
            rows="5"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-poppins text-lg">Select Category</label>
          <select
            name="categoryId"
            value={task.categoryId}
            onChange={handleInputChange}
            className="border-2 border-gray-300 outline-none rounded-lg p-3 focus:ring-2 focus:ring-purple-500 w-full"
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
            className="border-2 border-gray-300 outline-none rounded-lg p-3 focus:ring-2 focus:ring-purple-500 w-full"
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
            className="border-2 border-gray-300 outline-none rounded-lg p-3 focus:ring-2 focus:ring-purple-500 w-full"
          />
        </div>

        <button
          onClick={onSubmit}
          className="w-full py-3 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition"
        >
          Update Task
        </button>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default EditTask;
