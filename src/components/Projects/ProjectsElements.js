import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 1150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #010606; change */
  background-color: white;

  @media screen and (max-width: 700px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
    margin-bottom: 10px;
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
    grid-gap: 7px;
  }
`;

export const ProjectsCard = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-in-out;
  color: white;

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
  font-size: 2.5rem;
  color: black;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 100px;
  }
`;
export const ProjectsH2 = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const ProjectsP = styled.div`
  font-size: 1rem;
  text-align: center;
`;
// export const ProjectsSubtitle = styled.div`
// `
