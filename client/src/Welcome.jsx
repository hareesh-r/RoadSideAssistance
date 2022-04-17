import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./asset/img/logo.jpeg";
import customer from "./asset/img/customer.png";
import mechanic from "./asset/img/mechanic.jpg";
function Welcome() {
  return (
    <div className="welcome flex col">
      <div className="welcome-greeting flex row">
        <h1>Welcome to Road Side Assistance</h1>
        <Link to="/LoginAdmin"><img src={logo} alt="" /></Link>
      </div>

      <h2>Please Login</h2>
      <div className="images-in-row flex row">
        <Link to="/LoginUser">
          <div className="flex col image-link">
            <img className="user-img" src={customer} alt="" />
            <p>Customer</p>
          </div>
        </Link>
        <Link to="/LoginMech">
          <div className="col image-link">
            <img src={mechanic} alt="" />
            <p>Mechanic</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
