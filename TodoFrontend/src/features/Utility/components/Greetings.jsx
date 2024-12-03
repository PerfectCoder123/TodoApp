import React, { useState, useEffect } from "react";

const Greetings = () => {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <div className="font-poppins">
      <div className="">
        <h1 className="text-lg text-gray-500">Welcome Back,</h1>
        <h1 className="text-4xl">{greeting} 👋</h1>
      </div>
    </div>
  );
};

export default Greetings;
