import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Tracktask from "./pages/Tracktask";
import "./App.css";
import EditTask from "./pages/EditTask";

const App = () => {
  return (
    <Router>
      <div className="font-poppins">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edittask" element={<EditTask />} />
          <Route path="/tracktask" element={<Tracktask />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
