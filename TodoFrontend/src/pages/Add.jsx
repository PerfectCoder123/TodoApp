import React, { useEffect, useState } from "react";
import AddTask from "../features/AddTask/components/AddTask";
import AddCategory from "../features/AddCategory/components/AddCategory";

const Add = () => {
  const [activeTab, setActiveTab] = useState("task");

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-5">
      <div className="flex justify-center items-center">
        <button
          className={`px-6 py-2 rounded-l-full font-poppins ${
            activeTab === "task"
              ? "bg-purple-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveTab("task")}
        >
          Task
        </button>
        <button
          className={`px-6 py-2 rounded-r-full font-poppins ${
            activeTab === "category"
              ? "bg-purple-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveTab("category")}
        >
          Category
        </button>
      </div>

      <div className="w-full max-w-4xl p-3 rounded-lg">
        {activeTab === "task" && <AddTask />}

        {activeTab === "category" && <AddCategory />}
      </div>
    </div>
  );
};

export default Add;
