import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 1350px;
  display: justify;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  /* background-color: #010606; change */
  background-color: white;
  margin-top: 100px;
  

  @media screen and (max-width: 700px) {
    height: 1800px;
    
  }

  @media screen and (max-width: 480px) {
    max-height: 1400px;
   
    background-color: red;
    
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 30px;
  /* background-color: red; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    max-width: 1900px;
    height: 900px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin-bottom: 70px;
    grid-gap: 6px;
    
    /* background-color: red; */
  }
`;

export const ProjectsCard = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 5px 3px 13px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  color: black;
  background-color: rgba(248, 249, 249, 0.2);
  

  &:hover {
    transform: scale(1.02);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
`;
export const ProjectsIcon = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
 display: none;
  }
`;

export const ProjectsH1 = styled.div`
  color: black;
  margin-bottom: 64px;
  margin-left: 40px;
  font-family: "Menlo", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 100px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    
  }
`;
export const ProjectsH2 = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;

  
`;
export const ProjectsP = styled.div`
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
// export const ProjectsSubtitle = styled.div`
// `
