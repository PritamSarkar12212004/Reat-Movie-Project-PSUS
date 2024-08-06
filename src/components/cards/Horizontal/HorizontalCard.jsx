import React, { useEffect, useState } from "react";
import CatagorySlection from "../categorySeletcion/CatagorySlection";
import InfiniteScroll from "react-infinite-scroll-component";

function HorizontalCard({ data, setcate }) {
  const cateProps = ["movie", "all", "tv"];
  return (
    <div className="w-full px-3 py-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-zinc-700">Trending</h1>
        <CatagorySlection
          setcate={setcate}
          opatins={["Trending"]}
          cateProps={cateProps}
        />
      </div>
      <div
        className="w-full h-[50vh] mt-6 overflow-x-auto scroll-0 whitespace-nowrap  overflow-y-hidden"
        style={{ scrollbarWidth: "none" }}
      >
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
