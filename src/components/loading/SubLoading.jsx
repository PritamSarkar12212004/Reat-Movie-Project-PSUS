import React from "react";

function SubLoading() {
  return (
    <div className="w-full h-screen">
      <video
        src="/loadingScreen/loading.mp4"
        className="w-[100vw] h-[100vh] object-cover"
        loop
        muted
        autoPlay
      ></video>
    </div>
  );
}

export default SubLoading;
