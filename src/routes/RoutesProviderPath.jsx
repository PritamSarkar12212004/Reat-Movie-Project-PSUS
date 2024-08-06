import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";

function RoutesProvider() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default RoutesProvider;
