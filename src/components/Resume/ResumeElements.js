import styled from "styled-components";
import BackGround from "../../assets/portfolio.jpg";


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
  @media screen and (max-width: 768px) {
    /* display: none; */
    background-image: none;
    background-color: white;
    background-position: center;
    height: 100%;
    width: 100%;
    /* Possibly change to 1100px due to navbar */
    max-width: 1500px;
  }
`;

export const PortfolioCards = styled.div`
// background: red;
// height: 32%;
// width: 55.2%;
// position: fixed;
// bottom: 0px;
// /* top: 3640px;
// left: 233px; */
// z-index: 3;

// /* top: 210px;
// left: 276px; */
`