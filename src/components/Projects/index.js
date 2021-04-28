import React from "react";
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsH1,
  ProjectsP,
  ProjectsIcon,
  SlidesSection,
  ProjectsFooter
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
import { ReactComponent as GitLogo } from "../../assets/icons8-github.svg";



const Projects = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  //  const handleClose = () => setShow(false);
  //  const handleShow = () => setShow(true);

  const nextProject = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevProject = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div>
      <ProjectsContainer id="Projects">
        <br></br>
        <ProjectsH1>Projects</ProjectsH1>
        <SlidesSection>
          <section className="slider">
            <ProjectsWrapper>
              <FaArrowAltCircleLeft
                className="left-arrow"
                onClick={prevProject}
              />
              <FaArrowAltCircleRight
                className="right-arrow"
                onClick={nextProject}
              />
              {ProjectData.map((slide, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <ProjectsCard>
                        <h3>{slide.title}</h3>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <ProjectsP>
                          <iframe
                            width="420"
                            height="315"
                            src={slide.Vid}
                          ></iframe>

                          <div>
                            <h4>{slide.summary}</h4>
                             <a href={slide.github}>
                              <GitLogo />
                            </a>
                          </div>
                        </ProjectsP>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                          <hr></hr>
                        <ProjectsFooter>
                          
                          <ProjectsIcon src={slide.imgA} />
                          <ProjectsIcon src={slide.imgB} />
                          <ProjectsIcon src={slide.imgC} />
                          <ProjectsIcon src={slide.imgD} />
                        </ProjectsFooter>
                      </ProjectsCard>
                    )}
                  </div>
                );
              })}
            </ProjectsWrapper>
          </section>
        </SlidesSection>
      </ProjectsContainer>
    </div>
  );
};

export default Projects;
