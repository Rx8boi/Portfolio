import styled from 'styled-components'

export const InfoContainer = styled.div`
color: #fff;
background: ${({ lightBg }) => (lightBg ? 'white' : 'black')};

@media screen and (max-width: 768px) {
    padding: 100px 0;
    
}
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 960px;
    width: 100%;
    /* Possibly change to 1100px due to navbar */
    max-width:1500px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    `;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

`;

export const TopLine = styled.p`
  /* color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 30px; */
  color: black;
  margin-bottom: 30px;
  font-family: "Menlo", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-decoration: none;
`;

export const Heading = styled.h1`
    margin-bottom: 34px;
    font-size: 48px;
    line-height: 1.1%;
    font-weight: 600;
    color: ${({ lightText }) =>
    (lightText ? '#f7f8fa' : '010606')};
        
        @media screen and (max-width: 480px) {
            font-size: 32px;

        }
`;

export const Subtitle = styled.div`
  max-width: 460px;

  margin-bottom: 20px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "white" : "black")};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 565px;
  height: 100%;

  @media screen and (max-width: 768px) {
    position: relative;
    top: -200px;
    right: -104px;
    height: 75%;
    width: 75%;
  }

  @media screen and (max-width: 450px) {
    top: -155px;
    right: -120px;
    height: 70%;
    width: 70%;
  }

  @media screen and (max-width: 350px) {
  display:none;
  }
`;

  export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
  `;