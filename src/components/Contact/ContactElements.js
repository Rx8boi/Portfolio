import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 1000px;
  display: justify;
  flex-direction: column;
  justify-content: center;
  align-items: left;
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

  @media screen and (max-width: 768px) {
    /* padding-bottom: 10px; */
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    /* padding-bottom: 50px; */
  }
`;

export const ContactInfo = styled.div`
  margin-top: 40px;
  max-width: 1500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* align-items: center; */
  grid-gap: 50px;
  padding: 0 20px;
  font-size: 1.4vh;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    font-size: 1.2vh;
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
  font-size: .8rem;
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
    height: 60%;
  }

  @media screen and (max-width: 768px) {
    max-width: 650px;
    height: 750px;
  }

  @media screen and (max-width: 600px) {
    max-height: 80%;
  } ;
`;

export const ContactPref = styled.div`
  position: relative;
  padding-top: 80px;
  width: 100%;
  height: 90%;
  color: black;
  font-family: "Menlo", sans-serif;
  font-size: 1.2rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-decoration: none;
`;

export const ContactFooter = styled.div``;
