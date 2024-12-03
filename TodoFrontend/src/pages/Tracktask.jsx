import React, { useEffect } from "react";
import Search from "../features/Utility/components/Search";
import { useState } from "react";
import TaskTimelineList from "../features/TaskTimeline/components/TasktimelineList";

const Tracktask = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex flex-col items-center justify-center px-5 py-10">
      <h1 className="p-5 font-poppins text-5xl text-center">
       Todo List
      </h1>
      <Search searhTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TaskTimelineList searchTerm={searchTerm} />
    </div>
  );
};

export default Tracktask;
