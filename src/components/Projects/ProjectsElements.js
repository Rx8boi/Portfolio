import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 1050px;
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
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  align-items: center;
  padding: 0 30px;
  
`;

export const ProjectsCard = styled.div`
  /* display: flex;
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
   */

  width: 1000px;
  height: 600px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 5px 3px 13px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  color: black;
  background-color: rgba(248, 249, 249, 0.2);

  &:hover {
    transform: scale(1.02);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 600px;
    height: 900px;
  }
`;



export const ProjectsIcon = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
 display: inline-flex;
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

export const SlidesSection = styled.div`
 /* position: relative;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center; */

`;