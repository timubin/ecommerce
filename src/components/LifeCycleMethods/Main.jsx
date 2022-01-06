import React, { useState } from "react";
import LifeCycleMethods from "../LifeCycleMethods/LifeCycleMethods";
const Main = () => {
  const [isShowed, setIsShowed] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setIsShowed(false);
        }}
      >
        Hide All data
      </button>
      {isShowed && <LifeCycleMethods />}
    </>
  );
};

export default Main;
