import React, { useEffect } from "react";
import logo from "./asset/img/logo.jpeg";
import "./App.css";
function Intro() {
  useEffect(() => {
    setTimeout(() => {
      var element = document.getElementById("intro-logo");
      element.classList.add("loaded");
    }, 1000);
  }, []);

  return (
    <div className="flex intro">
      <img className="" id="intro-logo" src={logo} alt="" />
    </div>
  );
}

export default Intro;
