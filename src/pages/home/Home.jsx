import React from "react";
import { Slider } from "./components/slider/Slider";
import { Arrivals } from "./components/arrivals/Arrivals";
import NewSletter from "./components/newsletter/NewSletter";
import { PartnersList } from "./components/logo partners/PartnersList";
import { Hero } from "./components/hero/Hero";

export const Home = () => {
  return (
    <>
      <Slider />
      <Hero />
      <Arrivals />
      <PartnersList />S
      <NewSletter />
    </>
  );
};
