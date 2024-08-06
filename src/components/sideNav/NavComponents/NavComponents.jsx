import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function NavComponents() {
  const { New_Feed } = useSelector((state) => state.sidenavSlice.data);

  return (
    <div className="flex flex-col gap-2 border-b-2 py-2">
      <h1 className=" font-extralight text-xl">New Feeds</h1>
      {New_Feed.map((item, index) => (
        <div
          key={index}
          className=" py-3 hover:bg-[#3572EF] rounded-xl duration-300  text-zinc-300"
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

export default NavComponents;
