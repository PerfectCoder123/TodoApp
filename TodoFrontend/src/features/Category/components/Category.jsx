import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../../config";

const Category = ({ category }) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleOnClick = () => {
    navigate("/tracktask", { state: { category } });
  };

  useEffect(() => {
    if (category && category.name) {
      axios
        .get(`${config.API_URL}/Task/category/${category.id}`)
        .then((response) => {
          const fetchedTasks = response.data;
          setTasks(fetchedTasks);
          calculateProgress(fetchedTasks);
        });
    }
  }, [category?.name]);

  const calculateProgress = (fetchedTasks) => {
    const totalTasks = fetchedTasks.length;
    if (totalTasks === 0) {
      setProgress(0);
      return;
    }
    const completedTasks = fetchedTasks.filter(
      (task) => task.status === true
    ).length;
    const progressPercentage = Math.round((completedTasks / totalTasks) * 100);
    setProgress(progressPercentage);
  };

  return (
    <div
      onClick={handleOnClick}
      className={`w-72 border-2 ${
        category.priority === "High"
          ? "border-pink-500 bg-pink-50"
          : category.priority === "Medium"
          ? "border-orange-500 bg-orange-50"
          : "border-purple-300 bg-purple-50"
      } rounded-tl-3xl rounded-b-3xl p-4 bg-gray-50 flex-shrink-0`}
    >
      <div className="flex justify-between items-center">
        <span
          className={`text-xs font-bold px-2 py-1 rounded-full ${
            category.priority === "High"
              ? "bg-pink-100 text-pink-500"
              : category.priority === "Medium"
              ? "bg-orange-100 text-orange-500"
              : "bg-purple-100 text-purple-500"
          }`}
        >
          {category.priority.toUpperCase()}
        </span>
        <span className="text-gray-400 text-2xl cursor-pointer">↗</span>
      </div>

      <h3 className="mt-4 font-bold text-lg text-gray-800 truncate">
        {category.name}
      </h3>
      <p
        className="text-sm text-gray-500"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          WebkitLineClamp: 2,
          lineHeight: "1.5rem",
          minHeight: "3rem",
        }}
      >
        {category.description}
      </p>

      <div className="mt-6">
        <div className="flex justify-between text-sm font-semibold text-gray-500 mb-4">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-gray-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Category;
