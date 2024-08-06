import React from "react";
import NavComponents from "./NavComponents/NavComponents";
import NavWebComponents from "./NavComponents/NavWebComponents";

function SideNav() {
  return (
    <div className="w-[15%] h-screen border-r-[1px] px-4 py-5 flex  flex-col gap-10">
      <div>
        <h1 className="flex items-center gap-2 ">
          <span className=" flex  items-center text-2xl text-[#0011C7]">
            <img src="/logo/Logo.svg" alt="" />
          </span>
          <span className="text-2xl font-bold   ">PSUS</span>
        </h1>
      </div>
      <div>
        <NavComponents />
        <NavWebComponents />
      </div>
    </div>
  );
}

export default SideNav;
