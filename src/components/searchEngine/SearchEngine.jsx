import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axiosSetup/axios";
function SearchEngine() {
  const [input, setInput] = useState("");
  const [movieData, setMovieData] = useState([]);
  const ApiData = () => {
    axios
      .get(`/search/multi?query=${input}`)
      .then((res) => setMovieData(res.data.results))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    ApiData();
  }, [input]);
  return (
    <div className="flex items-center max-w-sm mx-auto mt-2 relative z-10">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-[25vw] ps-10 p-2.5  dark:bg-[#141212] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500  outline-none"
          placeholder="Search branch name..."
          required
        />
      </div>
      <span
        type="submit"
        className="  flex gap-3   ms-2 text-sm font-medium text-white   rounded-full px-3 py-2"
      >
        <button className="text-2xl">
          <i className="ri-search-2-line"></i>
        </button>
        {input.length > 0 ? (
          <button className="text-2xl" onClick={(e) => setInput("")}>
            <i className="ri-close-large-fill"></i>{" "}
          </button>
        ) : null}
      </span>
      {input.length > 0 ? (
        <div className=" absolute w-full  top-[100%] bg-zinc-900 px-3 py-2 flex mt-3 rounded-xl  flex-col gap-3 h-[50vh] min-h-[20vh] overflow-y-auto">
          {movieData.map((item, index) => (
            <Link
              key={item.id}
              className="w-full border-b-2 border-gray-400 bg-zinc-900 text-zinc-400 py-2 rounded-lg px-2 hover:bg-zinc-800 hover:text-white "
            >
              <div className="flex gap-2 items-center text-zinc-400">
                {item.backdrop_path ? (
                  <img
                    className="h-12  rounded-lg"
                    loading="lazy"
                    src={`http://image.tmdb.org/t/p/w500/${item.backdrop_path}  `}
                    alt=""
                  />
                ) : (
                  <img
                    src="/NoImage/noimage.jpeg"
                    className="h-12  rounded-lg"
                    alt="no image"
                  />
                )}
                <h1 className="text-sm">
                  {" "}
                  {item.name || item.title || item.original_name}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SearchEngine;
