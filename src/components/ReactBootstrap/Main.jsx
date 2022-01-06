import React, { useState } from "react";
import ReactBootstrap from "../ReactBootstrap/ReactBootstrap";
import Manu from "../ReactBootstrap/Menu/Manu";
import Slider from "../ReactBootstrap/slider/Slider";
import Portfolio from "../ReactBootstrap/Portfolio/Portfolio";
import Contact from "../ReactBootstrap/contact/Contact";
const Main = () => {
  return (
    <>
      {/* <ReactBootstrap /> */}
      <Manu />
      <Slider />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Main;
