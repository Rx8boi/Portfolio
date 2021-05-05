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
            <h2> Contact Info </h2> This section is going to be 1fr 1fr
            <ContactLanguages>
              <h2> Contact languages </h2> Here are the languages i use box area card
            </ContactLanguages>
            <ContactPref>
              <h2> Contact Pref</h2> This is my preference of stuff i want just words
            </ContactPref>
          </ContactInfo>
          <ContactFooter></ContactFooter>
        </ContactWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
