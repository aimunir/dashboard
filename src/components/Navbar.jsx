import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import SettingsImg from "../assests/setttings.png";
import PowerImg from "../assests/power.png";
import Base from "../assests/Base.png";

const NavBar = () => {
  return (
    <div className="w-full  bg-gray-20 ">
      <div className=" w-full h-16 pl-12 pr-11  flex items-center justify-between">
        <div className="uppercase text-2xl font-bold text-gray-600 cursor-pointer ">
          dashboard
        </div>

        {/* navbar menu   */}
        <div className="">
          <ul className="flex gap-6 font-bold text-gray-300 cursor-pointer">
            <li>Dashboard</li>
            <li>Cards</li>
            <li>Workflow</li>
            <li>Notification</li>
            <li>settings</li>
          </ul>
        </div>
        {/* navbar menu   */}

        {/* search section  */}
        <div className="flex gap-5">
          <SearchIcon className="w-5 text-gray-500 font-bold cursor-pointer" />
          <form>
            <input
              className="outline-yellow-50 rounded-xl px-4"
              type="text"
              placeholder="Search Content ..."
            />
          </form>
        </div>
        {/* search section  */}

        {/* avatar section  */}
        <div className="flex gap-5 cursor-pointer">
          <img className="w-[37px] h-[37px] " src={Base} alt="/" />
          <div>
            <h4 className="text-[12px] font-bold text-slate-900">Jackson D.</h4>
            <h5 className="font-semibold text-gray-400 text-[10px]">Manager</h5>
          </div>
        </div>
        {/* avatar section  */}

        {/* icon section  */}
        <div className="flex gap-5 cursor-pointer">
          <img className="w-5 h-5" src={SettingsImg} alt="/" />
          <img className="w-5 h-5" src={PowerImg} alt="/" />
        </div>
        {/* icon section  */}
      </div>
    </div>
  );
};

export default NavBar;
