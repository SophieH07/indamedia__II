import React from "react";
import BackgroundVideo from "../assets/backgroundvideo.mp4";

const Home = () => {
  return (
    <>
      <div className="w-[100%] relative text-center inline-flex justify-center mt-20">
        <video
          className="h-full w-full absolute top-0 left-0"
          src={BackgroundVideo}
          autoPlay
          loop
          muted
        ></video>
        <div className="text-white h-full w-[40em] bg-black mix-blend-multiply pb-6">
          <p className="text-8xl font-bold">HELLO</p>
          <p className="text-8xl font-bold">WORLD!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
