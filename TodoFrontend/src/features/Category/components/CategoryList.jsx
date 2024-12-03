import React, { useState, useRef, useEffect } from "react";
import Category from "./Category";
import arrow from "../../../assets/arrow.png";
import axios from "axios";
import config from "../../../config";
import empty_category from "../../../assets/empty_category.png";

const CategoryList = ({ searchTerm }) => {
  const [categories, setCategories] = useState([]);
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    axios.get(`${config.API_URL}/Category`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-poppins">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">All Categories</h2>
        <div className="flex gap-5">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            <img
              src={arrow}
              alt="left-arrow"
              className="transform rotate-180 w-7 h-7"
            />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            <img src={arrow} alt="right-arrow" className="w-7 h-7" />
          </button>
        </div>
      </div>
      <div>
        {filteredCategories.length === 0 ? (
          <div>
            <img
              src={empty_category}
              alt="Empty Task"
              className="max-w-64 mx-auto"
            />
            <p className="text-center text-gray-500">
              No categories available. Add a new Category!.
            </p>
          </div>
        ) : (
          <div
            ref={containerRef}
            className="flex gap-5 overflow-x-auto no-scrollbar"
          >
            {filteredCategories
              .map((category) => (
                <Category key={category.id} category={category} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
