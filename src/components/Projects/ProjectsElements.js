import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 1350px;
  display: justify;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  /* background-color: #010606; change */
  background-color: white;

  @media screen and (max-width: 1024px) {
    height: 1500px;
  }

  @media screen and (max-width: 800px) {
    height: 1200px;
  }
  @media screen and (max-width: 420px) {
    height: 1050px;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 98%;
  max-height: 100%;
  margin: 0 auto;
  align-items: center;
  padding: 0 30px;
  
`;

export const ProjectsCard = styled.div`
  align-items: center;
  position: relative;
  max-width: 950px;
  height: 68%;
  margin-left: 18px;
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

  @media screen and (max-width: 1024px) {
    height: 60%;
  }

  @media screen and (max-width: 768px) {
    max-width: 650px;
    height: 750px;
  }

  @media screen and (max-width: 600px) {
    max-height: 80%;
  };
`;



export const ProjectsIcon = styled.img`
  height: 50px;
  width: 50px;
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
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    padding-bottom: 50px;
  }
`;
export const ProjectsH2 = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectVideo = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ProjectsP = styled.div`
  margin-top: 40px;
  max-width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* align-items: center; */
  grid-gap: 35px;
  padding: 0 20px;
  overflow: scroll;
  font-size: 1.4vh;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
   
    font-size: 1.2vh;
  }
`;
export const ProjectsFooter = styled.div`
  position: relative;
  max-width: 200px;
  min-width: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1px;
  padding: 0 20px;

  @media screen and (max-width: 1124px) {
    bottom: -2px;
  }

  @media screen and (max-width: 768px) {
    right: -20px;
  }
`;

export const SlidesSection = styled.div`
`;