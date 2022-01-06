import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [slider, setSlider] = useState([(img = "")]);
  return (
    <div className="slide">
      <div className="simg"></div>
      <button>slider Chinge</button>
      <button>slider Chinge 2</button>
    </div>
  );
};

export default Slider;
