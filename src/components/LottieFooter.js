import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const Styles = styled.div`

 .container{
    position: relative;
    left: -46;
    top: -60;
    width: 5%;
    height: 5%;
} 

  .mobileLink {
    @media screen and (min-width:768px) {
      display: none;
    }
  }
`;

const LFooter = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottie/Contact.json"),
    });
  }, []);

  return (
    <Styles>
      <a href="https://www.linkedin.com/in/charlesbutlerjr" className="container" ref={container}></a>
      <a href="https://www.linkedin.com/in/charlesbutlerjr" className="mobileLink">Linkedin</a>
    </Styles>
  );
};

export default LFooter;
