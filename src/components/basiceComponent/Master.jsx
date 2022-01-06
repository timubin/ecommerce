import React from "react";
import BasicReact from "../basiceComponent/BasicReact";

const Master = () => {
  const name = "Mubin";
  const Myfun = () => {
    alert("Mubin");
  };

  const myObj = {
    name: "Tarikul Islam",
    age: 25,
    cgpa: "A+",
  };

  const myArray = ["Huawia", "Nokia", "Samsung"];
  return (
    <div>
      <BasicReact name={name} Myfun={Myfun} myObj={myObj} myArray={myArray} />
    </div>
  );
};

export default Master;
