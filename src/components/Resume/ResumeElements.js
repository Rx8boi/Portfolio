import styled from "styled-components";
import BackGround from "../../assets/portfolio.jpg";


export const ResumeContainer = styled.div`

`;

export const ResumeWrapper = styled.div`
  background-image: url(${BackGround});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
    background-color: white;
    height: 960px;
    width: 100%;
    /* Possibly change to 1100px due to navbar */
    max-width: 1500px;
  }
`;
