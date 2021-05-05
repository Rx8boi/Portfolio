import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 1350px;
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
  max-width: 98%;
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
  /* padding-bottom: 10px; */

  @media screen and (max-width: 768px) {
    /* padding-bottom: 10px; */
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    /* padding-bottom: 50px; */
  }
`;

export const ContactInfo = styled.div``;

export const ContactLanguages = styled.div``;

export const ContactPref = styled.div``;

export const ContactFooter = styled.div``;
