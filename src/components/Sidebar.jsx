import React from "react";
import Profile1 from "../assests/profile1.png";
import Profile2 from "../assests/profile2.png";
import Profile3 from "../assests/profile3.png";
import Profile4 from "../assests/profile4.png";
import Profile5 from "../assests/profile5.png";
import {
  ViewGridIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  ColorSwatchIcon,
  ChatAlt2Icon,
  AdjustmentsIcon,
  MailIcon,
  BellIcon,
  CameraIcon,
} from "@heroicons/react/solid";
import { CloudUploadIcon } from "@heroicons/react/outline";
const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen pt-16 ml-8">
      {/* menu bar  */}
      <div className="cursor-pointer">
        {/* main page  */}
        <div className="flex gap-[26px]">
          <ViewGridIcon className="w-5 h-5 text-blue-800" />
          <h3 className="text-blue-800 font-bold text-[12px] leading-5">
            Main Page
          </h3>
        </div>
        {/* main page  */}

        {/* payments  */}
        <div className="flex gap-[26px] my-7 items-center ">
          <ShoppingCartIcon className="w-5 h-5 text-gray-200" />
          <h3 className=" text-gray-500 font-bold text-[12px] leading-5">
            Payments
          </h3>
          <p className="text-[10px]  bg-red-300 px-2 py-1 rounded-full ml-5">
            2
          </p>
        </div>
        {/* payments  */}

        {/* Cards   */}
        <div className="flex gap-[26px] my-7">
          <CreditCardIcon className="w-5 h-5 text-gray-200" />
          <h3 className=" text-gray-500 font-bold text-[12px] leading-5">
            Cards
          </h3>
        </div>
        {/* Cards  end */}

        {/* services  */}
        <div className="flex gap-[26px] my-7">
          <ColorSwatchIcon className="w-5 h-5 text-gray-200" />
          <h3 className=" text-gray-500 font-bold text-[12px] leading-5">
            Services
          </h3>
        </div>
        {/* services  end */}

        {/* chats */}
        <div className="flex gap-[26px] my-7">
          <ChatAlt2Icon className="w-5 h-5 text-gray-200" />
          <h3 className=" text-gray-500 font-bold text-[12px] leading-5">
            Chats
          </h3>
          <p className="text-[10px]  bg-green-400 px-2 py-1 rounded-full ml-8 ">
            24
          </p>
        </div>
        {/* chats end */}

        {/* settings  */}
        <div className="flex gap-[26px] my-7">
          <AdjustmentsIcon className="w-5 h-5 text-gray-200 rotate-90" />
          <h3 className=" text-gray-500 font-bold text-[12px] leading-5">
            Settings
          </h3>
        </div>
        {/* settings end */}

        {/* inbox  */}

        <div className="flex gap-[26px] my-7">
          <MailIcon className="w-5 h-5 text-gray-200" />
          <h3 className=" text-gray-500 font-bold text-[12px] leading-5">
            Inbox
          </h3>
        </div>

        {/* inbox end */}

        {/* Notification  */}
        <div className="flex gap-[26px] my-7">
          <BellIcon className="w-5 h-5 text-gray-200" />
          <h3 className=" text-gray-500 font-bold text-[12px] leading-5">
            Notification
          </h3>
        </div>
        {/* Notification end */}
      </div>
      {/* menu bar end */}

      {/* chat__bar  */}
      <div className="drop-shadow-2xl bg-gray-100 w-[250px] h-[272px] rounded-xl mt-9 mb-6 pl-3 pr-6">
        {/* person-1  */}
        <div className="flex justify-between items-center pt-[13px]">
          <div className="flex items-center">
            <img
              className="ring-2 ring-gray-100 rounded-full"
              src={Profile1}
              alt="/"
            />
            <h3 className="font-bold text-gray-500 ml-[25px] lending-5 text-[11px] ">
              Peter Taylor
            </h3>
          </div>
          <CameraIcon className="w-4 h-12 text-red-500" />
        </div>
        {/* person-1 end */}

        {/* person-2*/}
        <div className="flex justify-between items-center pt-[13px]">
          <div className="flex items-center">
            <img
              className="ring-2 ring-gray-100 rounded-full"
              src={Profile2}
              alt="/"
            />
            <h3 className="font-bold text-gray-500 ml-[25px] lending-5 text-[11px] ">
              Szekeres Dalma
            </h3>
          </div>
        </div>
        {/* person-2 end */}
        {/* person-3 */}
        <div className="flex justify-between items-center pt-[13px]">
          <div className="flex items-center">
            <img
              className="ring-2 ring-gray-100 rounded-full"
              src={Profile3}
              alt="/"
            />
            <h3 className="font-bold text-gray-500 ml-[25px] lending-5 text-[11px] ">
              {" "}
              Balázs Annamária{" "}
            </h3>
          </div>
          <ChatAlt2Icon className="w-4 h-12 text-green-400 " />
        </div>
        {/* person-3 end */}
        {/* person-4 */}
        <div className="flex justify-between items-center pt-[13px]">
          <div className="flex items-center">
            <img
              className="ring-2 ring-gray-100 rounded-full"
              src={Profile4}
              alt="/"
            />
            <h3 className="font-bold text-gray-500 ml-[25px] lending-5 text-[11px] ">
              {" "}
              Leslie Alexander{" "}
            </h3>
          </div>
        </div>
        {/* person-4 end */}
        {/* person-5 */}
        <div className="flex justify-between items-center pt-[13px]">
          <div className="flex items-center">
            <img
              className="ring-2 ring-gray-100 rounded-full"
              src={Profile5}
              alt="/"
            />
            <h3 className="font-bold  text-gray-500 ml-[25px] leading-5 text-[11px] ">
              {" "}
              Cameron Williamson{" "}
            </h3>
          </div>
        </div>
        {/* person-5 end */}
      </div>
      {/* chat__bar  end*/}

      {/* drag-n-drop  */}
      <div className=" drop-shadow-2xl w-[250px] h-[212px] rounded-xl bg-gray-100">
        <div className="flex flex-col items-center gap-[54px] pt-[60px] ">
          <CloudUploadIcon className=" w-8 h-8 text-blue-600 " />
          <h3 className="font-bold font-inter text-[12px] text-gray-300 lending-5 ">
            {" "}
            Drag-n-Drop to Upload
          </h3>
        </div>
      </div>
      {/* drag-n-drop end */}

{/* dark-n-light mode  */}
<div className="">

</div>
{/* dark-n-light mode end */}

    </div>
  );
};

export default Sidebar;
