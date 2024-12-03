import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddCategory = () => {
  const navigate = useNavigate();

  const notifySuccess = () => {
    toast.success("Category created successfully!", {
      onClose: () => navigate("/"),
    });
  };
  const notifyError = () => toast.error("Error creating Category!");

  const [category, setCategory] = useState({
    name: "",
    description: "",
    priority: "High",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      const response = await axios
        .post(`${config.API_URL}/Category`, {
          id: 0,
          ...category,
        })
        .then((response) => {
          notifySuccess();
        });
    } catch (error) {
      notifyError();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label className="font-poppins text-lg">Category Name</label>
        <input
          type="text"
          name="name"
          placeholder="Courses"
          value={category.name}
          onChange={handleInputChange}
          className="border-2 border-gray-300 outline-none rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-poppins text-lg">Description</label>
        <textarea
          name="description"
          placeholder="Add a description for the category"
          value={category.description}
          onChange={handleInputChange}
          className="border-2 border-gray-300 outline-none rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
          rows="10"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-poppins text-lg">Priority</label>
        <select
          name="priority"
          value={category.priority}
          onChange={handleInputChange}
          className="border-2 border-gray-300 outline-none rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <button
        onClick={onSubmit}
        className="w-full py-3 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition"
      >
        Confirm
      </button>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default AddCategory;
