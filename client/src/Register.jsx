import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Register({ user }) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Location, setLocation] = useState("");
  const [Shop, setShop] = useState("");
  const [Phone, setPhone] = useState(0);
  const [Cost, setCost] = useState(0);
  const [Email, setEmail] = useState("");
  const [VechileType, setVechileType] = useState("");
  const [VechileModel, setVechileModel] = useState("");
  const [Problem, setProblem] = useState("");
  console.log(user);
  const addUser = () => {
    Axios.post("http://localhost:3001/addUser", {
      Username,
      Password,
      Location,
      Phone,
      Email,
      VechileType,
      VechileModel,
      Problem,
    }).then(() => {
      alert("User Added Successfully");
      window.location.href = "/LoginUser";
    });
  };
  return (
    <div className="Login flex col">
      {user === "user" ? <h1>Welcome User!</h1> : <h1>Welcome Mechanic!</h1>}
      {user === "user" ? (
        <>
          <div className="flex col login-container">
            <div className="input-grp flex row">
              <h1>Username</h1>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder="Username"
              />
            </div>
            <div

              className="input-grp flex row"
            >
              <h1>Password </h1>
              <input onChange={(e) => {
                setPassword(e.target.value);
              }} type="password" placeholder="Password" />
            </div>

            <div

              className="input-grp flex row"
            >
              <h1>Location </h1>
              <input onChange={(e) => {
                setLocation(e.target.value);
              }} className="location" type="text" placeholder="Location" />
            </div>

            <div

              className="input-grp flex row"
            >
              <h1>Phone Number </h1>
              <input onChange={(e) => {
                setPhone(e.target.value);
              }} type="phone" placeholder="Phone Number" />
            </div>

            <div

              className="input-grp flex row"
            >
              <h1>Email </h1>
              <input onChange={(e) => {
                setEmail(e.target.value);
              }} type="email" placeholder="Email" />
            </div>

            <div

              className="input-grp flex row"
            >
              <h1>Vehicle Type </h1>
              <input onChange={(e) => {
                setVechileType(e.target.value);
              }} type="text" placeholder="Vehicle Type" />
            </div>

            <div

              className="input-grp flex row"
            >
              <h1>Vehicle Model </h1>
              <input onChange={(e) => {
                setVechileModel(e.target.value);
              }} type="text" placeholder="Vehicle Model" />
            </div>

            <div

              className="input-grp flex row"
            >
              <h1>Problem Description </h1>
              <input onChange={(e) => {
                setProblem(e.target.value);
              }} type="text" placeholder="Optional" />
            </div>

            <button
              onClick={() => {
                addUser();
              }}
            >
              Register
            </button>
          </div>
          <h3>
            Already Have an Account ? <Link to="/LoginUser">Login</Link>
          </h3>
        </>
      ) : (
        <>
          <div className="flex col login-container">
            <div className="input-grp flex row">
              <h1>Username</h1>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder="Username"
              />
            </div>
            <div

              className="input-grp flex row"
            >
              <h1>Password </h1>
              <input onChange={(e) => {
                setPassword(e.target.value);
              }} type="password" placeholder="Password" />
            </div>

            <div

              className="input-grp flex row location"
            >
              <h1>Location </h1>
              <div className="flex col right">
                <input onChange={(e) => {
                  setLocation(e.target.value);
                }} className="location" id="location" type="text" placeholder="Location" />
                <button id="locationbutton" onClick={
                  () => {
                    if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition(showPosition);
                    }
                    function showPosition(position) {
                      document.getElementById("location").value = "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;
                      setLocation("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude)
                    }
                  }
                }>Get Device Location</button>
              </div>

            </div>

            <div

              className="input-grp flex row"
            >
              <h1>Shop Name</h1>
              <input onChange={(e) => {
                setShop(e.target.value);
              }} type="text" placeholder="Shop Name" />
            </div>

            <div

              className="input-grp flex row"
            >
              <h1>Base Cost </h1>
              <input onChange={(e) => {
                setCost(e.target.value);
              }} type="text" placeholder="Base Cost" />
            </div>

            <div

              className="input-grp flex row"
            >
              <h1>Phone Number </h1>
              <input onChange={(e) => {
                setPhone(e.target.value);
              }} type="phone" placeholder="Phone Number" />
            </div>

            <div

              className="input-grp flex row"
            >
              <h1>Email </h1>
              <input onChange={(e) => {
                setEmail(e.target.value);
              }} type="email" placeholder="Email" />
            </div>

            <button
              onClick={() => {
                console.log(
                  Username +
                  " " +
                  Password +
                  " " +
                  Email +
                  " " +
                  Cost +
                  " " +
                  Phone +
                  " " +
                  Shop +
                  " " +
                  Location
                );
                Axios.post("http://localhost:3001/addMech", {
                  Username,
                  Password,
                  Location,
                  Shop,
                  Cost,
                  Phone,
                  Email,
                }).then((res) => {
                  console.log(res.data);
                  alert("Mechanic Added Successfully");
                  window.location.href = "/LoginMech";
                });
              }}
            >
              Register
            </button>
          </div>
          <h3>
            Already Have an Account ? <Link to="/LoginMech">Login</Link>
          </h3>
        </>
      )}
    </div>
  );
}

export default Register;
