import React from "react";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 text-white bg-[#1e1f22]">
        Main Content
      </div>
    </div>
  );
};

export default App;
