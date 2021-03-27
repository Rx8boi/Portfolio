import styled from "styled-components";
import BackGround from "../../assets/myresume.jpg";
import BkGround from "../../assets/wresumecopy.png";

export const ResumeContainer = styled.div`

`;

export const ResumeWrapper = styled.div`
  background-image: url(${BackGround});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 780px) {
    background-color: gray;
    background-image: url(${BkGround});
    background-position: center;
    background-size: contain;
  }
`;
