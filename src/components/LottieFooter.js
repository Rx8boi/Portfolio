import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const Styles = styled.div`

 .container{
    position: relative;
    left: -100;
    top: 20;
} 
`;

const LContact = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottie/fbookinstatwit.json"),
    });
  }, []);

  return (
    <Styles>
      <div className="container" ref={container}></div>
    </Styles>
  );
};

export default LContact;
