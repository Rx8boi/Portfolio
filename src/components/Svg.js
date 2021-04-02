import React from "react";
import { ReactComponent as GitLogo } from "../assets/icons8-github.svg";
// import { ReactComponent as InstaLogo } from "../assets/icons8-instagram.svg";
// import { ReactComponent as FaceLogo } from "../assets/icons8-facebook.svg";
// import { ReactComponent as TwitterLogo } from "../assets/icons8-twitter.svg";
import { ReactComponent as LinkedLogo } from "../assets/icons8-linkedin.svg";
import { ReactComponent as MediumLogo } from "../assets/MediumColor.svg";
import styled from "styled-components";

const Styles = styled.div`
  .List {
    justify-content: space-between;
  }
`;
const SocialLogo = () => {
  return (
    <Styles>
      <div className="List">
        {/* <a href="https://www.instagram.com/charles.atx">
          <InstaLogo />
        </a>
        <a href="https://www.facebook.com/charlesbutler8">
          <FaceLogo />
        </a>
        <a href="https://twitter.com/Charles_atx_">
          <TwitterLogo />
        </a> */}
        <a href="https://www.linkedin.com/in/charlesbutlerjr">
          <LinkedLogo />
        </a>
        <a href="https://www.github.com/Rx8boi">
          <GitLogo />
        </a>

        <a href="https://cdbutle.medium.com/">
          <MediumLogo />
        </a>
      </div>
    </Styles>
  );
};
export default SocialLogo;
