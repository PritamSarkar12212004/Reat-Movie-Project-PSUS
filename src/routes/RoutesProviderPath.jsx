import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Trending from "../components/MainPage/trending/Trending";
import Popular from "../components/MainPage/popular/Popular";
import Movies from "../components/MainPage/movies/Movies";
import TvShow from "../components/MainPage/tvShow/TvShow";
import People from "../components/MainPage/people/People";
function RoutesProvider() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Trending" element={<Trending />} />
      <Route path="/Popular" element={<Popular />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/Tv_Show" element={<TvShow />} />
      <Route path="/People" element={<People />} />
    </Routes>
  );
}

export default RoutesProvider;
