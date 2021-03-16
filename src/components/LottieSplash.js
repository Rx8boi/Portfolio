import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const Styles = styled.div`

.container{
    position: relative;
    top: -40;
}`;

const LottieSplash = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottie/webdev.json"),
    });
  }, []);

  return (
    <Styles>
      <div className="container" ref={container}></div>
    </Styles>
  );
};

export default LottieSplash;
