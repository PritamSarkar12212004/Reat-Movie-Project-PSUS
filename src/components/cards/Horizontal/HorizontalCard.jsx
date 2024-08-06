import React, { useEffect, useState } from "react";
import CatagorySlection from "../categorySeletcion/CatagorySlection";
import axios from "../../../utils/axiosSetup/axios";

function HorizontalCard() {
  const [data, setData] = useState([]);
  const [cate, setcate] = useState("movie");

  const dataApi = () => {
    axios
      .get(`/trending/${cate}/day`)
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  };
  console.log(data);
  useEffect(() => {
    dataApi();
  }, [cate]);

  return (
    <div className="w-full px-3 py-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-zinc-700">Trending</h1>
        <CatagorySlection setcate={setcate} />
      </div>
      <div className="w-full h-[50vh] mt-6 overflow-x-auto whitespace-nowrap  overflow-y-hidden">
        {data.map((item, index) => (
          <div
            className="inline-block text-left w-[15vw] h-full mr-4 rounded-lg overflow-hidden shadow-lg bg-zinc-900 text-wrap relative"
            key={index}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt={item.title || item.original_title}
              className="w-full h-[50%] object-cover"
              loading="lazy"
            />
            <div className="p-2">
              <h1 className=" text-lm text-zinc-400 font-semibold">
                {item.title || item.original_title}
              </h1>
              <p className="text-[13px]">{item.original_title}</p>
              <p className="text-xs text-zinc-400 absolute bottom-2 right-1">
                {item.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCard;
