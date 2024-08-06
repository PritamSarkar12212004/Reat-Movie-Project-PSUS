import React from "react";
import SearchEngine from "../searchEngine/SearchEngine";
import Header from "./header/Header";
import HorizontalCard from "../cards/Horizontal/HorizontalCard";

function MainContent({ data, setcate, headerData }) {
  return (
    <div className="w-[85%] overflow-y-auto">
      <SearchEngine />
      <Header headerData={headerData} />
      <HorizontalCard data={data} setcate={setcate} />
    </div>
  );
}

export default MainContent;
