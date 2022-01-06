import React, { useState } from "react";

const Practice = () => {
  const [name, setName] = useState("Mubin");
  const [date, setDate] = useState(new Date());
  const changeName = () => {
    setName("Tarikul Islam Mubin");
  };

  return (
    <div>
      <h3>{name}</h3>
      <h3>{date.getFullYear}</h3>
      <button onClick={() => changeName()}>Change your name</button>
    </div>
  );
};

export default Practice;
