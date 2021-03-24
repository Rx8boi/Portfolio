import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 900px;
    position: relative;
    z-index: 1;

    /* Add :before styles */
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  background: black;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
    `

    export const ArrowRight = styled(MdKeyboardArrowRight)`
      margin-left: 8px;
      font-size: 20px;
    `;