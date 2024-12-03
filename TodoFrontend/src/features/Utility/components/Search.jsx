import React from "react";
import search from "../../../assets/search_icon.png";

const Search = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center border-2 border-purple-500 rounded-xl overflow-hidden">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search task..."
          className="flex-grow px-4 py-2 focus:outline-none"
        />
        <button className="p-2">
          <img src={search} alt="Search Icon" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Search;
