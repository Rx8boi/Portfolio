import React from "react";
import TimeLineData from "./Data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { Header, TImeLineContainer, TimeLineWrapper } from "./TimeLineElements";

const TimeLine = () => {

  return (
    <>
      <TimeLineWrapper id="TimeLine">
        <TImeLineContainer>
          <Header>
            <h1 className="title">Timeline</h1>
          </Header>
          <VerticalTimeline>
            {TimeLineData.map((data) => {
              let iconData = <img src={data.icon} />
              let showButton =
                data.buttonText !== undefined &&
                data.buttonText !== null &&
                data.buttonText !== "";

              return (
                <VerticalTimelineElement
                  key={data.key}
                  date={data.date}
                  dateClassName="date"
                  iconStyle={data.iColor}
                  icon={iconData}
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
                      className={`button`}
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
