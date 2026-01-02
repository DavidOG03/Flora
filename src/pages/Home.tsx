import React from "react";
import Hero from "../components/Home-Components/Hero";
import Stats from "../components/Home-Components/Stats";
import Services from "../components/Home-Components/Sevices";
import Testimonial from "../components/Home-Components/Testimonial";
import SelectedWorks from "../components/Home-Components/SelectedWorks";
import CTA from "../components/Home-Components/CTA";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <SelectedWorks />
      <Testimonial />
      <CTA />
    </>
  );
};

export default Home;
