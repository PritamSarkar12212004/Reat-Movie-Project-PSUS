import React, { useEffect, useState } from "react";
import SideNav from "../sideNav/SideNav";
import MainContent from "../mainContent/MainContent";
import axios from "../../utils/axiosSetup/axios";
import MainScreenLoading from "../loading/MainScreenLoading";
import { Analytics } from "@vercel/analytics/react"

function Home() {
  // this for the Horizontal Card Data
  const [data, setData] = useState([]);
  const [cate, setcate] = useState("movie");
  const dataApi = () => {
    axios
      .get(`/trending/${cate}/day`)
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  };
  // this for the Horizontal Card Data End

  // Header Data Api
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
    dataApi();
  }, [cate]);
  return (
    <div className="w-full h-screen flex">
      {data.length && headerData ? (
        <div className="w-full h-full flex">
          <SideNav />
          <MainContent data={data} setcate={setcate} headerData={headerData} />
          <Analytics/>
        </div>
      ) : (
        <MainScreenLoading />
      )}
    </div>
  );
}

export default Home;
