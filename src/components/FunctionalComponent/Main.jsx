import React from "react";
import FunctionalComponent from "./FunctionalComponent";
import Practice from "./Practice";

const Main = () => {
  /*  const user = {
    name: "Mubin",
    description:
      "Congratulations! You’ve just “passed a prop” from a parent Board component to a child Square component. Passing props is how information flows in React apps, from parents to chil",
    skill: "Html, Css , jQuere, Javascript ",
  };
  const user2 = {
    name: "Tarikul islam Mubin",
    description:
      "Congratulations! You’ve just “passed a prop” from a parent Board component to a child Square component. Passing props is how information flows in React apps, from parents to chil",
    skill: "Html, Css , jQuere, Javascript ",
  }; */

  return (
    <div>
      {/*  <FunctionalComponent1 titel="This is user one component " />
      <FunctionalComponent2 titel2="This is user two component " />
      <FunctionalComponent3 titel3="This is user there component " /> */}

      {/* <FunctionalComponent user={user} />
      <FunctionalComponent user={user2} /> */}
      <Practice />
    </div>
  );
};

/* 
function FunctionalComponent1({ titel }) {
  return (
    <div>
      <h1>This is a Function 1 </h1>
      <h3>{titel} </h3>
    </div>
  );
}

const FunctionalComponent2 = ({ titel2 }) => {
  return (
    <div>
      <h1>This is a Functional Component 2 </h1>
      <h3>{titel2}</h3>
    </div>
  );
};

function FunctionalComponent3({ titel3 }) {
  return (
    <div>
      <h1>This is a Functional Component 3 </h1>
      <h3>{titel3}</h3>
    </div>
  );
} */
export default Main;
