import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from '../components/InfoSection/Data';
import Portfolio from '../components/Resume';

const Home = () => {
        //variable -> 
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjFour} />
        <Portfolio />
      </>
    );
}

export default Home
