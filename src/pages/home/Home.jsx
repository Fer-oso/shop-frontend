import React from "react";
import { Slider } from "./components/slider/Slider";
import { Arrivals } from "./components/arrivals/Arrivals";
import NewSletter from "./components/newsletter/NewSletter";
import { PartnersList } from "./components/logo partners/PartnersList";
import { Hero } from "./components/hero/Hero";
import VideoPlayer from "./components/video/VideoPlayer";

export const Home = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50">
      <VideoPlayer
        videoSrc={"/videos/video.mp4"}
        buttonText={"Explore products"}
        buttonLink={"/products"}
      />
      <Hero />
      <Arrivals />
      <PartnersList />
      <NewSletter />
    </div>
  );
};
