import React from "react";
import {
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
import Chrome from "../assests/chrome 1.svg";
import FigmaImg from "../assests/Figma-logo 1.svg";
import Adobe from '../assests/adobe-illustrator-cs6 1.svg'
import Edge from '../assests/microsoft-edge-1 1.svg'
import Office from '../assests/office-2 1.svg'
import Line from '../assests/line-messenger 1.svg'


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

      <div className="pt-8 mx-6  flex flex-col">
        {/* figma  */}
        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4  rounded-sm justify-between ">
          <div className="flex items-center gap-5 py-2">
            <div  className="w-7 h-7  ml-2 drop-shadow-2xl bg-white rounded-md  flex items-center justify-center ">
              <img src={FigmaImg} alt="" />
            </div>
            <h4 className="font-bold text-[11px] text-gray-500">Figma</h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 pr-5">4h 43min</p>
        </div>
        {/* figma  */}

        {/* safari  */}
        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4  rounded-sm justify-between pr-5 mt-2 ">
          <div className="flex items-center gap-5 py-2">
            <div className="w-7 h-7  ml-2 drop-shadow-2xl bg-white  rounded-md  flex items-center justify-center ">
              <img src={Chrome} alt="/" />
            </div>
            <h4 className="font-bold text-[11px] text-gray-500">Safari</h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 ">4h 43min</p>
        </div>
        {/* safari end */}
        {/* chrome  */}
        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4  rounded-sm justify-between pr-5 mt-2 ">
          <div className="flex items-center gap-5 py-2">
            <div className="w-7 h-7  ml-2 drop-shadow-2xl bg-white rounded-md  flex items-center justify-center ">
              <img src={Chrome} alt="/" />
            </div>
            <h4 className="font-bold text-[11px] text-gray-500">Chrome</h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 ">4h 43min</p>
        </div>
        {/* chrome end */}

        {/* Adobe  */}

        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4  rounded-sm justify-between pr-5 mt-2 ">
          <div className="flex items-center gap-5 py-2">
            <div className="w-7 h-7  ml-2 drop-shadow-2xl bg-white rounded-md  flex items-center justify-center ">
              <img src={Adobe} alt="/" />
            </div>
            <h4 className="font-bold text-[11px] text-gray-500">Adobe illustrator</h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 ">4h 43min</p>
        </div>

        {/* Adobe end */}

        {/* microsoft  */}
        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4  rounded-sm justify-between pr-5 mt-2 ">
          <div className="flex items-center gap-5 py-2">
            <div className="w-7 h-7  ml-2 drop-shadow-2xl bg-white  rounded-md  flex items-center justify-center ">
              <img src={Edge} alt="/" />
            </div>
            <h4 className="font-bold text-[11px] text-gray-500">Microsoft Edge</h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 ">4h 43min</p>
        </div>
       
        {/* microsoft end */}

        {/* office  */}
        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4  rounded-sm justify-between pr-5 mt-2 ">
          <div className="flex items-center gap-5 py-2">
            <div className="w-7 h-7  ml-2 drop-shadow-2xl bg-white  rounded-md  flex items-center justify-center ">
              <img src={Office} alt="/" />
            </div>
            <h4 className="font-bold text-[11px] text-gray-500">Office</h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 ">4h 43min</p>
        </div>
        {/* office end */}

        {/* line messenger  */}
        <div className="flex  items-center drop-shadow-2xl bg-gray-100 mx-4  rounded-sm justify-between pr-5 mt-2 ">
          <div className="flex items-center gap-5 py-2">
            <div className="w-7 h-7  ml-2 drop-shadow-2xl bg-white rounded-md  flex items-center justify-center ">
              <img src={Line} alt="/" />
            </div>
            <h4 className="font-bold text-[11px] text-gray-500">Line Messenger</h4>
          </div>
          <p className="font-bold text-[11px] text-gray-400 ">4h 43min</p>
        </div>
        {/* line messenger end */}
      </div>

      {/* Name end */}
    </div>
  );
};

export default Applications;
