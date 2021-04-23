import React from "react";
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsH1,
  ProjectsH2,
  ProjectsP,
  ProjectsIcon,
} from "./ProjectsElements";

import Icon0 from "../../assets/languages/c-logo.svg";
import Icon1 from "../../assets/languages/arduino.svg";
import Icon9 from "../../assets/timelineLogos/important.svg";
import Icon2 from "../../assets/timelineLogos/important.svg";
import Icon3 from "../../assets/timelineLogos/important.svg";
import Icon4 from "../../assets/timelineLogos/important.svg";
import Icon5 from "../../assets/timelineLogos/important.svg";
import Icon6 from "../../assets/timelineLogos/important.svg";
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ProjectsModal from "../ProjectsModal";
import { ProjectData } from './Data'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'




const Projects = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length
  //  const handleClose = () => setShow(false);
  //  const handleShow = () => setShow(true);


  return (
    <div>
      <ProjectsContainer id="Projects">
        <br></br>
        <ProjectsH1>Projects</ProjectsH1>
        <section className="slider">
          {/* <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> */}
          {ProjectData.map((slide, index) => {
            return (
              <ProjectsCard>
                <ProjectsIcon src={slide.imgA} />
                <ProjectsIcon src={slide.imgB} />
                <br></br>
                <h3>{slide.title}</h3>
                <h4>{slide.summary}</h4>
              </ProjectsCard>
            );
          })}
        </section>
        {/* // <ProjectsWrapper>
        //   <ProjectsCard>
        //     <div>
        //       <ProjectsIcon src={Icon0} />
        //       <ProjectsIcon src={Icon1} />
        //     </div>
        //     <ProjectsH2> Carbon Fiber Iron Man Helmet</ProjectsH2>
        //     <ProjectsP>
        //       Summary: C++ Arduino uno programming with custom machine
        //       application
        //     </ProjectsP>
        //     <ProjectsModal />
        //   </ProjectsCard>
        //   <ProjectsCard>
        //     <ProjectsIcon src={Icon0} />
        //     <ProjectsH2> Carbon Fiber Iron Man Helmet</ProjectsH2>
        //     <ProjectsP>
        //       Summary: C++ Arduino uno programming with custom machine
        //       application
        //     </ProjectsP>
           
        //   </ProjectsCard>
        //   <ProjectsCard>
        //     <ProjectsIcon src={Icon1} />
        //     <ProjectsH2> Video Game Tracker CLI</ProjectsH2>
        //     <ProjectsP>Summary: Ruby based project with fetch calls</ProjectsP>
            
        //   </ProjectsCard>
        //   <ProjectsCard>
        //     <ProjectsIcon src={Icon2} />
        //     <ProjectsH2> Marvel Movie Project</ProjectsH2>
        //     <ProjectsP>Summary: Utilized Sinatra gem.</ProjectsP>
            
        //   </ProjectsCard>
        //   <ProjectsCard>
        //     <ProjectsIcon src={Icon3} />
        //     <ProjectsH2> GameRateSwap</ProjectsH2>
        //     <ProjectsP>
        //       Summary: GameRateSwap application that utilizes rails framework,
        //       omniauth gem & Devise.
        //     </ProjectsP>
            
        //   </ProjectsCard>
        //   <ProjectsCard>
        //     <ProjectsIcon src={Icon4} />
        //     <ProjectsH2> My Fantasy League: NBA</ProjectsH2>
        //     <ProjectsP>
        //       Summary: Fantasy League for when you're ready for game time. NBA
        //       support with future NFL updates.
        //     </ProjectsP>
            
        //   </ProjectsCard>
        //   <ProjectsCard>
        //     <ProjectsIcon src={Icon5} />
        //     <ProjectsH2> A Good Calculator</ProjectsH2>
        //     <ProjectsP>
        //       Summary: Simple calculator utilizing AngularJS. Showing junior
        //       level software engineering qualities.
        //     </ProjectsP>
           
        //   </ProjectsCard>
        //   <ProjectsCard>
        //     <ProjectsIcon src={Icon6} />
        //     <ProjectsH2> TimeLine</ProjectsH2>
        //     <ProjectsP>
        //       Summary: TIme-Line application for Flatiron Final Project
        //     </ProjectsP>
            
        //   </ProjectsCard> 
        // </ProjectsWrapper> */}
      </ProjectsContainer>
    </div>
  );
};

export default Projects;
