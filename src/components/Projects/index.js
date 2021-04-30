import React from "react";
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsH1,
  ProjectsP,
  ProjectsIcon,
  SlidesSection,
  ProjectsFooter,
  ProjectVideo,
} from "./ProjectsElements";

import { useState } from "react";
import { ProjectData } from "./Data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { ReactComponent as GitLogo } from "../../assets/icons8-github.svg";
import { ReactComponent as YouTubeLogo } from "../../assets/icons8-youtube.svg";
import { ReactComponent as CodePenLogo } from "../../assets/languages/codepen.svg";

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
                let showGithub =
                  slide.github !== undefined &&
                  slide.github !== null &&
                  slide.github !== "";

                let showCodePen =
                  slide.CodPen !== undefined &&
                  slide.CodPen !== null &&
                  slide.CodPen !== "";
                let showYouTube =
                  slide.Vid !== undefined &&
                  slide.Vid !== null &&
                  slide.Vid !== "";
                
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
                          <ProjectVideo>
                            <iframe
                              width="320"
                              height="215"
                              src={slide.Vid}
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </ProjectVideo>

                          <div>
                            <h4>{slide.summary}</h4>
                          </div>
                          <div>
                            <h3>Links:</h3>
                            <br></br>
                            {showGithub && (
                              <a href={slide.github}>
                                <GitLogo />
                              </a>
                            )}
                            {showCodePen && (
                              <a href={slide.CodPen}>
                                <CodePenLogo />
                              </a>
                            )}
                            {showYouTube && (
                              <a href={slide.Vid}>
                                <YouTubeLogo />
                              </a>
                            )}
                          </div>
                          <div>
                            <h4>Specifications</h4>
                            <br></br>
                            <li>{slide.spec1}</li>
                            <li>{slide.spec2}</li>
                            <li>{slide.spec3}</li>
                            <li>{slide.spec4}</li>
                            <li>{slide.spec5}</li>
                          </div>
                        </ProjectsP>
                        <br></br>

                        <br></br>
                        <br></br>
                        <br></br>
                        <hr></hr>
                        <ProjectsFooter>
                          <ProjectsIcon src={slide.imgD} />
                          <ProjectsIcon src={slide.imgC} />
                          <ProjectsIcon src={slide.imgB} />
                          <ProjectsIcon src={slide.imgA} />
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
