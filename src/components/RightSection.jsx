import React from "react";
import Applications from "./Applications";
import Communication from "./Communication";
import Costs from "./Costs";
import Creativity from "./Creativity";
import Others from "./Others";
import Productivity from "./Productivity";
import Sales from "./Sales";
import Usage from "./Usage";
import WebStatistic from "./WebStatistic";
import Work from "./Work";

const RightSection = () => {
  return (
    <div className=" w-full mr-4 bg-red-400 mt-[110px] grid grid-rows-2 gap-6">
      {/* upper    */}
      <div className="flex">
        <Usage />
        <div>
          <Work />
          <Creativity />
        </div>
        <div className='ml-6'>
          <Communication />
          <Productivity />
          <Others />
        </div>
      </div>

      {/* upper end   */}
      {/* lower  */}
      <div className="flex  ">
        <Sales />
        <Applications />
        <div className="flex flex-col">
          <WebStatistic />
          <Costs />
        </div>
      </div>
      {/* lower  */}
    </div>
  );
};

export default RightSection;
