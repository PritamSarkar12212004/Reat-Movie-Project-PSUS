import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchEngine from "../../searchEngine/SearchEngine";
import CatagorySlection from "../../cards/categorySeletcion/CatagorySlection";
import axios from "../../../utils/axiosSetup/axios";
import VorizontalCard from "../../cards/VorticalCards/VorizontalCard";
function Trending() {
  const [cate, setcate] = useState("movie");
  const [duration, setduration] = useState("day");
  const [trendingdata, settrendingdata] = useState([]);
  const backnavi = useNavigate();
  const dataApi = () => {
    axios
      .get(`/trending/${cate}/${duration}`)
      .then((res) => settrendingdata(res.data.results))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    dataApi();
  }, [cate, duration]);
  return (
    <div className="bg-[#0A0A0A] w-full f-screen overflow-y-auto  py-5 px-4 ">
      <nav className="flex  items-center justify-between">
        <div className="flex items-center gap-2">
          <span className=" inline-block text-2xl">
            <i
              onClick={() => backnavi(-1)}
              class="ri-arrow-left-line hover:text-[#002cff]  cursor-pointer"
            ></i>
          </span>
          <h1 className="text-2xl text-zinc-400 font-bold">Trending</h1>
        </div>
        <div>
          <SearchEngine />
        </div>
        <div className="flex gap-3">
          <CatagorySlection
            cateProps={["movie", "all", "tv"]}
            setcate={setcate}
          />
          <CatagorySlection cateProps={["day", "week"]} setcate={setduration} />
        </div>
      </nav>
      <VorizontalCard trendingdata={trendingdata} />
    </div>
  );
}

export default Trending;
