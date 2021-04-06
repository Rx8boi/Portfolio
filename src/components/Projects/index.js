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
import Icon0 from "../../assets/timelineLogos/important.svg";
import Icon1 from "../../assets/timelineLogos/important.svg";
import Icon2 from "../../assets/timelineLogos/important.svg";
import Icon3 from "../../assets/timelineLogos/important.svg";
import Icon4 from "../../assets/timelineLogos/important.svg";
import Icon5 from "../../assets/timelineLogos/important.svg";
import Icon6 from "../../assets/timelineLogos/important.svg";

const Projects = () => {
  return (
    <div>
      <ProjectsContainer id="Projects">
        <br></br>
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsWrapper>
          <ProjectsCard>
            <ProjectsIcon src={Icon0} />
            <ProjectsH2> Carbon Fiber Iron Man Helmet</ProjectsH2>
            <ProjectsP>
              Summary: C++ Arduino uno programming with custom machine
              application
            </ProjectsP>
            {/* <ProjectsSubtitle darkText={darkText}> {description}</ProjectsSubtitle> */}
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon1} />
            <ProjectsH2> Video Game Tracker CLI</ProjectsH2>
            <ProjectsP>Summary: Ruby based project with fetch calls</ProjectsP>
            {/* <ProjectsSubtitle darkText={darkText}> {description}</ProjectsSubtitle> */}
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon2} />
            <ProjectsH2> Marvel Movie Project</ProjectsH2>
            <ProjectsP>Summary: Utilized Sinatra gem.</ProjectsP>
            {/* <ProjectsSubtitle darkText={darkText}> {description}</ProjectsSubtitle> */}
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon3} />
            <ProjectsH2> GameRateSwap</ProjectsH2>
            <ProjectsP>
              Summary: GameRateSwap application that utilizes rails framework,
              omniauth gem & Devise.
            </ProjectsP>
            {/* <ProjectsSubtitle darkText={darkText}> {description}</ProjectsSubtitle> */}
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon4} />
            <ProjectsH2> My Fantasy League: NBA</ProjectsH2>
            <ProjectsP>
              Summary: Fantasy League for when you're ready for game time. NBA
              support with future NFL updates.
            </ProjectsP>
            {/* <ProjectsSubtitle darkText={darkText}> {description}</ProjectsSubtitle> */}
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon5} />
            <ProjectsH2> A Good Calculator</ProjectsH2>
            <ProjectsP>
              Summary: Simple calculator utilizing AngularJS. Showing junior
              level software engineering qualities.
            </ProjectsP>
            {/* <ProjectsSubtitle darkText={darkText}> {description}</ProjectsSubtitle> */}
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon6} />
            <ProjectsH2> TimeLine</ProjectsH2>
            <ProjectsP>
              Summary: TIme-Line application for Flatiron Final Project
            </ProjectsP>
            {/* <ProjectsSubtitle darkText={darkText}> {description}</ProjectsSubtitle> */}
          </ProjectsCard>
        </ProjectsWrapper>
      </ProjectsContainer>

    </div>
  );
};

export default Projects;
