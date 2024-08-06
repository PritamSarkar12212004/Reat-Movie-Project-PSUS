import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function NavWebComponents() {
  const { Website_information } = useSelector(
    (state) => state.sidenavSlice.data2
  );
  return (
    <div className="w-full mt-3 flex flex-col gap-2">
      <h1 className="text-lg ">Web information</h1>
      {Website_information.map((item, index) => (
        <div
          key={index}
          className=" py-2 hover:bg-[#050C9C] rounded-xl duration-300  text-zinc-300"
        >
          <NavLink className="flex px-3 gap-3" to={item.link}>
            <span>{item.icon}</span>
            <h1>{item.link}</h1>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default NavWebComponents;
