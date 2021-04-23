// export const BlogCallContainer = styled.div`
//   background-color: black;
//   max-width: 100%;
//   display: grid;
//   color: white;
//   align-items: center;
//   padding: 0 30px;
// `;

import styled from "styled-components";

export const BlogCallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: left;
  /* background-color: #010606; change */
  background-color: black;
  color: white;
  max-height: 1900px;

  @media screen and (max-width: 700px) {
    height: 1900px;
  }

  @media screen and (max-width: 480px) {
    height: 1900px;
    margin-bottom: 10px;
    
  }
`;

export const BlogCallHeader = styled.div`
  color: white;
  /* padding: 19 40px; */
  margin-top: 35px;
  margin-left: 40px;
  margin-bottom: 20px;
  font-family: "Menlo", sans-serif;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-decoration: none;
`;

export const BlogCallWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
    /* background-color: red; */
  }
`;

export const BlogCard = styled.div`
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
  background-color: blue;

  &:hover {
    transform: scale(1.02);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
`;
