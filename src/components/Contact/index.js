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
  ContactPrefFooter,
  ContactFooter,
} from "./ContactElements";
import ContactLang from "./data";
import { FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const Contact = () => {
  return (
    <div id="Contact">
      <ContactContainer>
        <ContactWrapper>
          <ContactHeader>Contact</ContactHeader>
          <ContactInfo>
            <ContactLanguages>
              <h2> Languages & Proficiencies </h2>
              <hr />
              <ContactLanguagesWrapper>
                {ContactLang.map((data) => {
                  return <ContactLanguagesIcon src={data.icon} />;
                })}
              </ContactLanguagesWrapper>

              <ContactLanguagesFooter>
                <hr />
              </ContactLanguagesFooter>
            </ContactLanguages>
            <ContactPref>
              <h2>Currently Seeking JR Role in:</h2>
              <br />
              <hr />
              <br />
              <li>Front End Software Engineering</li>
              <br />
              <li>Back End Software Engineering</li>
              <br />
              <li>Full Stack Software Engineering</li>
              <br />
              <li>Software Development</li>
              <br />
              <li>Software Development Engineer in Test (SDET)</li>
              <br />
              <br />
              <br />
              <ContactPrefFooter>
                <h3>Located In Austin, TX</h3>
                <br />
                <h3>Open to Remote work</h3>
                <br />
                <hr />
              </ContactPrefFooter>
            </ContactPref>
          </ContactInfo>
          <ContactFooter>
            <h2>
              Feel free to reach out through LinkedIn{" "}
              <a href="https://www.linkedin.com/in/charlesbutlerjr">
                <FaLinkedin />
              </a> or email
              <a href="mailto:cdbutle@outlook.com">
                <BiMailSend />
              </a>
            </h2>
          </ContactFooter>
        </ContactWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
