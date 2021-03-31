import React, {useState} from "react";
import Video from "../../assets/gitCharles.mp4";
import { HeroContainer, HeroBg, VideoBg, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements";
import { Button } from '../ButtonElement';
import LottieSplash from "../LottieSplash";


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        <LottieSplash />
      </HeroBg>
      <HeroBtnWrapper>
        <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}>
          git Started {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
      <br></br>
    </HeroContainer>
  );
};

export default HeroSection;
