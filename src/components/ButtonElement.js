import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: black;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#f2f2f2" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.8s ease-in-out;
  z-index: 3;
  position: relative;
  bottom: -348px;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#f2f2f2")};
    color: ${({ dark }) => (dark ? "#f2f2f2" : "black")};
  }

  @media screen and (max-width: 600px) {
    margin-top: 10px;
    color: white;
    bottom: -190px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    bottom: -270px;
  }
`;
