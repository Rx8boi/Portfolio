import Portfolio from "../Resume";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "About",
  headline: "Hi I'm Charles",
  description:
    "I have a premedical background starting with a Bachelor of Science, Major in Microbiology, Minor in Chemistry and took a dynamic turn towards software engineering. My Undergraduate studies had me researching cellular structures so it was only appropriate for me to quickly grasp object-oriented programming since (fundamentally at least) OOP is based on the cell. Through individual studies & a rigorous full-time program at Flatiron I now also possess a great deal of theoretical and hands - on expertise in many software engineering languages & databases. These would include C++, Python, mySQL, MongoDB, PHP, Ruby frameworks, JavaScript frameworks such as React & Angular as wells as good ol' HTML & CSS. To put it bluntly I'm a Junior Software Engineer looking for the next challenge.",
  buttonLabel: "git Timeline",
  imgStart: true,
  img: require("../../assets/rx8boi.png"),
  alt: "Car",
  dark: true,
  primary: false,
  darkText: false,
};


export const homeObjTwo = {
  id: "TimeLine",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "TimeLine",
  headline: "Hi I'm Charles2",
  description: "Lorem ipsum....",
  buttonLabel: "git Timeline",
  imgStart: false,
  img: require("../../assets/rx8boi.png"),
  alt: "Car",
  dark: false,
  primary: true,
  darkText: false,
  // dark text of button
  // dark: true,
  // // frame of button
  // primary: false,
  // darkText: true,
};

export const homeObjThree = {
  id: "Resume",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Resume",
  headline: "Hi I'm Charles3",
  description:
    "I have a premedical background starting with a Bachelor of Science, Major in Microbiology, Minor in Chemistry and took a dynamic turn towards software engineering. To put it bluntly I'm a Junior Software Engineer looking for the next challenge.",
  buttonLabel: "git Timeline",
  imgStart: true,
  img: require("../../assets/rx8boi.png"),
  alt: "Car",
  dark: false,
  primary: true,
  darkText: false,
};
