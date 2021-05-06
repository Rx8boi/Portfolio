import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactHeader,
  ContactInfo,
    ContactLanguages,
    ContactLanguagesIcon,
    ContactLanguagesWrapper,
  ContactLanguagesFooter,
  ContactPref,
  ContactFooter,
} from "./ContactElements";
import  ContactLang from './data'



const Contact = () => {
  return (
    <div id="Contact">
      <ContactContainer>
        <ContactWrapper>
          <ContactHeader>Contact</ContactHeader>
          <ContactInfo>
            <ContactLanguages>
              <h2> Languages / Platforms </h2>
              <hr />
              <ContactLanguagesWrapper>
                              {ContactLang.map((data) => {
                                  return (
                                  <ContactLanguagesIcon src={data.icon} />)
                              })}
                 
              </ContactLanguagesWrapper>
              <br />
              <ContactLanguagesFooter>
                <hr />
              </ContactLanguagesFooter>
            </ContactLanguages>
            <ContactPref>
              This is my preference of stuff i want just words
            </ContactPref>
          </ContactInfo>
          <ContactFooter></ContactFooter>
        </ContactWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
