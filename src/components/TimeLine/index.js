import React from "react";
import TimeLineData from "./Data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ReactComponent as WorkIcon } from "../../assets/timelineLogos/8work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/timelineLogos/8school.svg";

import "react-vertical-timeline-component/style.min.css";
import { Header, TImeLineContainer, TimeLineWrapper } from "./TimeLineElements";
import styled from "styled-components";

const Styles = styled.div`
  .ending {
    position: relative;
    bottom: 20px;
  }
`;

const TimeLine = () => {
  let workIconColor = { background: "#01bf71" };
  let schoolIconColor = { background: "white" };

  return (
    <>
      <TimeLineWrapper id="TimeLine">
        <TImeLineContainer>
          <Header>
            <h1 className="title">Timeline</h1>
          </Header>
          <VerticalTimeline>
            {TimeLineData.map((data) => {
              let isWorkIcon = data.icon === "work";
              let showButton =
                data.buttonText !== undefined &&
                data.buttonText !== null &&
                data.buttonText !== "";

              return (
                <VerticalTimelineElement
                  key={data.key}
                  date={data.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconColor : schoolIconColor}
                  icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {data.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {data.location}
                  </h5>
                  <p id="description">{data.description}</p>
                  {showButton && (
                    <a
                      className={`button ${
                        isWorkIcon ? "workButton" : "schoolButton"
                      }`}
                      href="/"
                    >
                      {data.buttonText}
                    </a>
                  )}
                  <br></br>
                </VerticalTimelineElement>
              );
            })}
            <VerticalTimelineElement
              className="ending"
              contentStyle={{ opacity: "0", display: "none" }}
              box-shadow={{ opacity: "0" }}
              contentArrowStyle={{ borderRight: "10px solid  black" }}
              iconStyle={{
                background: "black",
                opacity: "1",
              }}
            ></VerticalTimelineElement>
          </VerticalTimeline>
        </TImeLineContainer>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </TimeLineWrapper>
    </>
  );
};

export default TimeLine;
