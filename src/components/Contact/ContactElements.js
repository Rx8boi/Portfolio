import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 800px;
  display: justify;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  margin-top: 20px;
  
  
  @media screen and (max-width: 800px) {
    height: 1300px;
    margin-bottom: 20px;
  }
  
  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }
  
  @media screen and (max-width: 540px) {
    height: 180%;
   margin-bottom: 220px;
    }
  @media screen and (max-width: 450px) {
    height: 175%;
   margin-bottom: 220px;
    }
  @media screen and (max-width: 375px) {
    height: 189%;
   margin-bottom: 220px;
   margin-top: 500px;
    }
  @media screen and (max-width: 365px) {
    height: 240%;
   margin-bottom: 220px;
    }
  `;

export const ContactWrapper = styled.div`
  max-width: 95%;
  max-height: 100%;
  margin: 0 auto;
  align-items: center;
  padding: 0 30px;
`;

export const ContactHeader = styled.h1`
  color: black;
  font-family: "Menlo", sans-serif;
  font-size: 1.8rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-decoration: none;
  padding-top: 100px;
  padding-bottom: 30px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    /* padding-bottom: 50px; */
  }

  @media screen and (max-width: 768px) {
    /* padding-bottom: 10px; */
  }

`;

export const ContactInfo = styled.div`
  margin-top: 40px;
  max-width: 1500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* align-items: center; */
  grid-gap: 60px;
  padding: 0 20px;
  
  

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    font-size: 1vh;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
    letter-spacing: 1px;
    padding: 2px;
  }
`;

export const ContactLanguages = styled.div`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 95%;
  margin-left: 18px;
  margin-right: 10px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 5px 3px 13px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  background-color: rgba(248, 249, 249, 0.2);
  color: black;
  font-family: "Menlo", sans-serif;
  font-size: 0.8rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 1024px) {
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    max-width: 650px;
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    max-height: 100%;
    max-width: 350px;
    margin-left: 2px;
  }
  @media screen and (max-width: 320px) {
    max-height: 100%;
    max-width: 250px;
    margin-left: 2px;
  }
`;

export const ContactLanguagesWrapper = styled.div`
  padding: 20px;
  padding-left: 45px;
  padding-right: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 600px) {
    padding: 5px;
    padding-left: 2px;
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 100%;
    max-width: 350px;
  }
`;

export const ContactLanguagesIcon = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 10px;
  margin-bottom: 5px;
  justify-content: center;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.4);
    transition: all 0.5s ease-in-out;
  }
`;

export const ContactLanguagesFooter = styled.div`
  position: relative;
  bottom: 0px;
`;

export const ContactPref = styled.div`
  position: relative;
  padding-top: 60px;

  width: 100%;
  height: 90%;
  color: black;
  font-family: "Menlo", sans-serif;
  font-size: 1.2rem;
  line-height: 17px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-decoration: none;

  @media screen and (max-width: 400px) {
    font-size: 1rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const ContactPrefFooter = styled.div`
  text-align: center;
  padding-left: 25px;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContactFooter = styled.div`
margin-top: 20px;
margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
`;

