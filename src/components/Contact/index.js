import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactHeader,
  ContactInfo,
  ContactLanguages,
  ContactPref,
  ContactFooter,
} from "./ContactElements";

const Contact = () => {
  return (
    <div id="Contact">
      <ContactContainer>
        <ContactWrapper>
          <ContactHeader>Contact</ContactHeader>
          <ContactInfo>
            <ContactLanguages>
                          <h2> Languages & Platforms </h2> 
                          <hr />
              Here are the languages i use box area card
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
