import React from "react";
import {
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
// import FigmaImg from "../assests/Figma.png";
// import SafariImg from "../assests/Logo.png";
// import Chrome from "../assests/chrome.png";
// import Adobe from "../assests/adobe-illustrator.png";
// import Edge from "../assests/microsoft-edge.png";
// import Office from "../assests/office.png";
// import Line from "../assests/line.png";

const Applications = () => {
  return (
    <div className=" drop-shadow-2xl bg-white w-[360px] h-[466px] rounded-xl mr-6 ">
      <div className="flex  justify-between items-center pt-8 pl-8  ">
        <h4 className="text-sm font-bold leading-5 text-gray-700">
          Applications
        </h4>
        <DotsHorizontalIcon className="w-8 h-7 drop-shadow-2xl bg-white mr-8 rounded-md text-gray-200" />
      </div>

      {/* Name  */}

      <div className="pt-8 ">
        {/* figma  */}
        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4 py-3 rounded-sm justify-between ">
          <div className="flex items-center gap-5">
            <img className="w-[10px] h-[15px] ml-4  " src={FigmaImg} alt="/" />
            <h4 className="font-bold text-[11px] text-gray-500">Figma</h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 pr-5">4h 43min</p>
        </div>
        {/* figma  */}

        {/* safari  */}
        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4 py-3 rounded-sm justify-between mt-2 ">
          <div className="flex items-center gap-5">
            <img className="w-[22px] h-[22px] ml-4" src={SafariImg} alt="/" />
            <h4 className="font-bold text-[11px] text-gray-500"> Safari Browser</h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 pr-5">4h 43min</p>
        </div>
        {/* safari end */}
        {/* chrome  */}
        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4 py-3 rounded-sm justify-between pr-5 mt-2 ">
          <div className="flex items-center gap-5">
            <img className="w-[18px] h-[18px] ml-4" src={Chrome} alt="/" />
            <h4 className="font-bold text-[11px] text-gray-500">Chrome</h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 ">4h 43min</p>
        </div>
        {/* chrome end */}

        {/* Adobe  */}

        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4 py-3 rounded-sm justify-between mt-2 ">
          <div className="flex items-center gap-5">
            <img className="w-[18px] h-[18px] ml-4" src={Adobe} alt="/" />
            <h4 className="font-bold text-[11px] text-gray-500">Adobe illustrator </h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 pr-5">4h 43min</p>
        </div>

        {/* Adobe end */}

        {/* microsoft  */}

        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4 py-3 rounded-sm justify-between mt-2 ">
          <div className="flex items-center gap-5">
            <img className="w-[18px] h-[18px] ml-4" src={Edge} alt="/" />
            <h4 className="font-bold text-[11px] text-gray-500"> Microsoft Edge</h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 pr-5">4h 43min</p>
        </div>

        {/* microsoft end */}

        {/* office  */}
        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4 py-3 rounded-sm justify-between mt-2 ">
          <div className="flex items-center gap-5">
            <img className="w-[16px] h-[16px] ml-4" src={Office} alt="/" />
            <h4 className="font-bold text-[11px] text-gray-500">Office</h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 pr-5">4h 43min</p>
        </div>
        {/* office end */}

        {/* line messenger  */}
        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4 py-3 rounded-sm justify-between mt-2 ">
          <div className="flex items-center gap-5">
            <img className="w-[18px] h-[18px] ml-4" src={Line} alt="/" />
            <h4 className="font-bold text-[11px] text-gray-500">Line Messenger</h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 pr-5">4h 43min</p>
        </div>
        {/* line messenger end */}
      </div>

      {/* Name end */}
    </div>
  );
};

export default Applications;
