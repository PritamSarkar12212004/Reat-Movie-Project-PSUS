import React from "react";
import { Link } from "react-router-dom";
import MainScreenLoading from "../../loading/MainScreenLoading";
function HorizontalCard({ trendingdata }) {
  console.log(trendingdata);
  return (
    <div className="flex gap-5 flex-wrap mt-5 justify-space-between w-full">
      {trendingdata.length > 0 ? (
        trendingdata.map((item, index) => (
          <Link
            key={index}
            className="w-[15vw] rounded-lg overflow-hidden text-zinc-500 hover:text-white duration-200"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
              className="w-full h-[40vh] object-cover"
            />
            <h1 className=" px-2 text-sm font-bold py-2">
              {item.title || item.original_name}
            </h1>
          </Link>
        ))
      ) : (
        <MainScreenLoading />
      )}
    </div>
  );
}

export default HorizontalCard;
