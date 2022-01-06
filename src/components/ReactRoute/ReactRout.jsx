import React, { useState } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Manu from "./pages/Manu";
import { BrowserRouter as Router, Route } from "react-router-dom";

const ReactRout = () => {
  return (
    <Router>
      <Manu />
      <Route exact path="/home" component={Home} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

export default ReactRout;
