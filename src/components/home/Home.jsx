import React from "react";
import SideNav from "../sideNav/SideNav";
import MainContent from "../mainContent/MainContent";

function Home() {
  return (
    <div className="w-full h-screen flex">
      <SideNav />
      <MainContent />
    </div>
  );
}

export default Home;
