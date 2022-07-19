import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
    <div className=' w-full h-full  bg-gray-20'>
    <Navbar/>
      <Sidebar/>
    </div>
      
    </>
  );
};

export default App;
