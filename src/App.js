import React from "react";
import Applications from "./components/Applications";
import Navbar from "./components/Navbar";
import RightSection from "./components/RightSection";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
    <div className=' w-full h-full  bg-gray-20  pb-[77px]'>
    <Navbar/>
    <div className="flex ">
    <Sidebar/>
      <RightSection/>
    </div>
      
    </div>
      
    </>
  );
};

export default App;
