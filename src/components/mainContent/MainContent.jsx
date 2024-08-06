import React from "react";
import SearchEngine from "../searchEngine/SearchEngine";
import Header from "./header/Header";
import HorizontalCard from "../cards/Horizontal/HorizontalCard";

function MainContent() {
  return (
    <div className="w-[85%] overflow-y-auto">
      <SearchEngine />
      <Header />
      <HorizontalCard />
    </div>
  );
}

export default MainContent;
