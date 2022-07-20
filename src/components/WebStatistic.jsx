import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

const WebStatistic = () => {
  return (
    <div className="w-[360px] h-[178px] bg-white rounded-xl">
      <div className="flex flex-col gap-11 " >
        <div className=" flex items-center justify-between ">
          <h3 className="font-bold text-[14px] text-gray-700 mt-[30px] ml-[30px]">
            Web Statistic
          </h3>
          <div className="drop-shadow-2xl bg-white mr-6 mt-5 py-1 px-1 rounded-md">
            <DotsHorizontalIcon className="w-5 text-gray-200 " />
          </div>
        </div>

        <div>     
        <p className='text-4xl font-bold'>chart</p>
        </div>
      </div>
    </div>
  );
};

export default WebStatistic;
