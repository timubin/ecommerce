import React from "react";

const BasicReact = ({ name, Myfun, myObj, myArray }) => {
  return (
    <div>
      <h1>My name is {name}</h1>
      <h2>{myObj.name}</h2>
      <h2>{myObj.age}</h2>
      <h2>{myObj.cgpa}</h2>
      <h3>Mobile {myArray + ","}</h3>
      <button
        onClick={() => {
          Myfun();
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default BasicReact;
