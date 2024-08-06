import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Trending from "../components/MainPage/trending/Trending";

function RoutesProvider() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Trending" element={<Trending />} />
    </Routes>
  );
}

export default RoutesProvider;
