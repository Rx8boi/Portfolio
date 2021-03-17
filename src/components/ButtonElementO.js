import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#fff" : "black")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#f2f2f2" : "black")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.8s ease-in-out;
  z-index: 3;
  

  &:hover {
    transition: all 0.8s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "black")};
    color: ${({ dark }) => (dark ? 'white' : 'black')};
  }
`;
