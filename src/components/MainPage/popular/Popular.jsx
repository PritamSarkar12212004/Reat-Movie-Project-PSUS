import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchEngine from "../../searchEngine/SearchEngine";
import axios from "../../../utils/axiosSetup/axios";
import VorizontalCard from "../../cards/VorticalCards/VorizontalCard";
import CatagorySlection from "../../cards/categorySeletcion/CatagorySlection";
function Popular() {
  const navigate = useNavigate();
  const [popular, setpopular] = useState([]);
  const pupularDataCall = () => {
    axios
      .get("/person/popular")
      .then((res) => setpopular(res.data.results))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    pupularDataCall();
  }, []);
  return (
    <div className="bg-[rgb(10,10,10)] w-full h-screen overflow-y-auto  py-5 px-4  ">
      <nav className="flex  items-center justify-between">
        <div className="flex items-center gap-2">
          <span className=" inline-block text-2xl">
            <i
              onClick={() => navigate(-1)}
              class="ri-arrow-left-line hover:text-[#002cff]  cursor-pointer"
            ></i>
          </span>
          <h1 className="text-2xl text-zinc-400 font-bold">Popular</h1>
        </div>
        <div className="flex">
          <SearchEngine />
        </div>
        <div className="flex gap-3">
        </div>
      </nav>
      <div>
        <VorizontalCard data={popular} />
      </div>
    </div>
  );
}

export default Popular;
