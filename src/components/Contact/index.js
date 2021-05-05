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
            <ContactLanguages></ContactLanguages>
            <ContactPref></ContactPref>
          </ContactInfo>
          <ContactFooter></ContactFooter>
        </ContactWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
