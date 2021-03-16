import React from "react";
import { Button } from '../ButtonElement'



const InfoSection = () => {
  return (
    <>
      <InfoContainer id={id}>
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
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
