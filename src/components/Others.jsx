import React from "react";

const Others = () => {
  return (
    <div className="w-[264px] h-[168px] bg-green-100 drop-shadow-2xl rounded-xl mt-6">
      <div className="flex gap-5">
        <div className="flex flex-col gap-6 my-6 ml-6">
          <h4 className="font-bold text-sm text-green-600"> 
            Others
          </h4>
          <p className="font-bold text-green-600 text-sm  ">5%</p>
          <p className="font-bold text-green-600text-[20px] leading-[28px] ">
            1 h 21 min
          </p>
        </div>

        <div> chart</div>
      </div>
    </div>
  );
};

export default Others;
