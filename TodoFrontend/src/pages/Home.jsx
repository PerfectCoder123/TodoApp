import React, { useEffect, useState } from "react";
import Greetings from "../features/Utility/components/Greetings";
import Search from "../features/Utility/components/Search";
import CategoryList from "../features/Category/components/CategoryList";
import Dates from "../features/Utility/components/Dates";
import TaskList from "../features/Task/components/TaskList";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {}, [location.state]);
  return (
    <div className="font-poppins p-10 flex flex-col gap-6">
      <Greetings />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryList searchTerm={searchTerm} />
      <Dates selectedDate={selectedDate} changeDate={setSelectedDate} />
      <TaskList selectedDate={selectedDate} searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
