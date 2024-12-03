import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Tasktimeline from "./Tasktimeline";
import notimeline from "../../../assets/no_timeline_task.png";
import config from "../../../config";

const TaskTimelineList = ({ searchTerm }) => {
  const location = useLocation();
  const category = location.state?.category || null;
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const updateOnSearch = () => {
    const filtered = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `${config.API_URL}/Task/category/${category?.id}`
        );
        setTasks(response.data);
        setFilteredTasks(response.data);
      } catch (error) {}
    };

    fetchTasks();
  }, [category]);

  useEffect(() => {
    updateOnSearch();
  }, [searchTerm, tasks]);

  return (
    <div>
      {filteredTasks.length === 0 ? (
        <div className="flex flex-col justify-center items-center m-28">
          <img src={notimeline} alt="Empty Task" className="max-w-sm mx-auto" />
          <p className="text-center font-poppins text-xl text-gray-500">
            No Tasks available. Add a new Tasks!.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 lg:px-15 py-10">
          {filteredTasks.map((task, index) => (
            <Tasktimeline key={task.id} task={task} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskTimelineList;
