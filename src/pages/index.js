import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne
} from "../components/InfoSection/Data";
import TimeLine from "../components/TimeLine";
// import Blog from "../components/Blog";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import BlogCall from "../components/BlogCall/BlogCall";
import { ProjectData } from "../components/Projects/Data";

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
      <Projects slides={ProjectData}/>
      <BlogCall />
      <Footer />
      
    </>
  );
};

export default Home;
