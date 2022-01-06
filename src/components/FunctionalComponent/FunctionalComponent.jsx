import React from "react";
import "./stayle.css";
function FunctionalComponent({ user }) {
  return (
    <div id="main">
      <h3>My name in {user.name}</h3>
      <p>{user.description}</p>
      <p>
        <b>{user.skill}</b>
      </p>
    </div>
  );
}

export default FunctionalComponent;
