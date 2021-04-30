import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 1050px;
  display: justify;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  /* background-color: #010606; change */
  background-color: white;
  
`;

export const ProjectsWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  align-items: center;
  padding: 0 30px;
  
`;

export const ProjectsCard = styled.div`
  align-items: center;
  position: relative;
  top: -100px;
  max-width: 950px;
  height: 68%;
  margin-left: 10px;
  margin-right: 10px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 5px 3px 13px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  color: black;
  background-color: rgba(248, 249, 249, 0.2);

  &:hover {
    transform: scale(1.02);
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    max-width: 650px;
    max-height: 600px;
  }
`;



export const ProjectsIcon = styled.img`
  height: 100px;
  width: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProjectsH1 = styled.div`
  color: black;
  margin-left: 40px;
  font-family: "Menlo", sans-serif;
  font-size: 1.8rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 100px;
  padding-bottom: 20px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    
  }
`;
export const ProjectsH2 = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectVideo = styled.div`

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const ProjectsP = styled.div`
margin-top: 40px;
  max-width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* align-items: center; */
  grid-gap: 40px;
  padding: 0 20px;
  overflow: scroll;
  font-size: 1.7vh;
`;
export const ProjectsFooter = styled.div`
  position: relative;
  bottom: -38px;
  left: 100px;
  max-width: 200px;
  min-width: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1px;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    right: -230px;
  }
`;
// export const ProjectsSubtitle = styled.div`
// `

export const SlidesSection = styled.div`
 /* position: relative;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center; */

`;