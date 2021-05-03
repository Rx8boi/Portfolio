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
    <>
      <ContactContainer>
        <ContactWrapper id="Contact">
          <ContactHeader> </ContactHeader>
          <ContactInfo>
            <ContactLanguages></ContactLanguages>
            <ContactPref></ContactPref>
          </ContactInfo>
          <ContactFooter></ContactFooter>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
