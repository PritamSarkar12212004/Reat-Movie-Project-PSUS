import React, { useEffect, useState } from "react";
import axios from "../../../utils/axiosSetup/axios";

function header() {
  const [headerData, setHeaderData] = useState([]);
  const headApi = () => {
    axios
      .get("/trending/all/day")
      .then((res) =>
        setHeaderData(
          res.data.results[(Math.random() * res.data.results.length).toFixed()]
        )
      )
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    headApi();
  }, []);
  return (
    <>
      {headerData ? (
        <div
          className="w-full mt-3 flex items-end "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(https://image.tmdb.org/t/p/original/${headerData.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "55vh",
            position: "relative",
          }}
        >
          <div className=" ml-16 flex flex-col w-1/2 gap-3 items-start mb-7">
            <h1 className="text-3xl font-extrabold">
              {headerData.title || headerData.original_name}
            </h1>
            <h2 className="text-xs">{headerData.overview}</h2>
            <div className="flex gap-2 items-center justify-center">
              <span className="text-[#F8E559]">
                <i class="ri-megaphone-fill"></i>
              </span>
              <h3 className="text-sm">
                {headerData.release_date ? (
                  headerData.release_date
                ) : (
                  <p>--/--/</p>
                )}
              </h3>
            </div>
            <button className="px-4 py-3 bg-[#4C3BCF] rounded-lg text-sm">
              Watch Trailer
            </button>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default header;
