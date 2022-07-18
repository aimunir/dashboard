import React from "react";
import {
  ViewGridIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  ColorSwatchIcon,
  ChatAlt2Icon,
  AdjustmentsIcon,
  MailIcon,
  BellIcon,
} from "@heroicons/react/solid";
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
          <p className="text-[10px]  bg-red-300 px-2 py-1 rounded-[50%] ml-5">2</p>
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

        {/* chats  */}
        {/* <div className="flex gap-[26px] my-7">
          <ShoppingCartIcon className="w-5 h-5 text-gray-200" />
          <h3 className=" text-gray-500 font-bold text-[12px] leading-5">
            Chats
          </h3>
        </div> */}
        {/* chats end */}

        {/* chats */}
        <div className="flex gap-[26px] my-7">
          <ChatAlt2Icon className="w-5 h-5 text-gray-200" />
          <h3 className=" text-gray-500 font-bold text-[12px] leading-5">
            Chats
          </h3>
          <p className="text-[10px]  bg-green-400 px-2 py-1 rounded-[50%] ml-8 ">24</p>
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
      {/* menu bar  */}
    </div>
  );
};

export default Sidebar;
