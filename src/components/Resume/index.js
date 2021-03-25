import React from 'react'
import BackGround from '../../assets/portfolio.jpg'
import { ResumeContainer, ResumeWrapper, PortfolioCards} from './ResumeElements';


const Portfolio = () => {
    return (
      <ResumeContainer id="Portfolio">
            <ResumeWrapper><PortfolioCards />
            </ResumeWrapper>
            
      </ResumeContainer>
    );
}

export default Portfolio
