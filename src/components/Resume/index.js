import React from 'react'
import BackGround from '../../assets/portfolio.jpg'
import { ResumeContainer, ResumeWrapper } from './ResumeElements';


const Portfolio = () => {
    return (
      <ResumeContainer>
        <ResumeWrapper>
          <div style={{ backgroundImage: `url(${BackGround}` }}>
            Hello World
          </div>
        </ResumeWrapper>
      </ResumeContainer>
    );
}

export default Portfolio
