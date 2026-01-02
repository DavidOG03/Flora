import React from "react";
import Hero from "../components/About-Components/Hero";
import Stats from "../components/About-Components/Stats";
import Values from "../components/About-Components/Values";
import Journey from "../components/About-Components/Journey";
import Team from "../components/About-Components/Team";
import CTA from "../components/About-Components/CTA";

const About: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Values />
      <Journey />
      <Team />
      <CTA />
    </>
  );
};

export default About;
