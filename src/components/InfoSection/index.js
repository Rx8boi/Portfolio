import React from "react";
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'


const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>
                  About
                  <Heading>
                    Hi I'm Charles
                    <Subtitle>
                      <BtnWrap>
                        <Button to="home">Button</Button>
                      </BtnWrap>
                    </Subtitle>
                  </Heading>
                </TopLine>
              </TextWrapper>
                      </Column1>
                      <Column2>
                          <ImgWrap>
                              <Img />
                          </ImgWrap></Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
