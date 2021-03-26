import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Portfolio from "../components/Resume";
import TimeLine from "../components/TimeLine";
import Blog from "../components/Blog";
import Projects from "../components/Projects";

const Home = () => {
  //variable ->
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <TimeLine />
      <Projects />
      <Blog />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
