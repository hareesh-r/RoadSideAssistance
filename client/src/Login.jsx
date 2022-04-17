import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { UserContext } from "./App";
import Axios from "axios";
function Login({ user }) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { CurrentUser, setCurrentUser } = useContext(UserContext);
  const { CurrentUserType, setCurrentUserType } = useContext(UserContext);
  const [IsValidUser, setIsValidUser] = useState(false);
  const checkUser = () => {
    Axios.get(
      user === "user"
        ? `http://localhost:3001/user`
        : `http://localhost:3001/mech`,
      {
        params: {
          username: Username,
          password: Password,
        },
      }
    ).then((response) => {
      if (response.data.length > 0) {
        console.log(response.data);
        setIsValidUser(true);
        setCurrentUser(response.data[0]);
        setCurrentUserType(user);
      } else {
        alert("Invalid Username or Password");
      }
    });
  };
  return (
    <div className="Login flex col">
      {user === "user" ? <h1>Welcome User!</h1> : <h1>Welcome Mechanic!</h1>}
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
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="input-grp flex row"
        >
          <h1>Password </h1>
          <input type="password" placeholder="Password" />
        </div>
        <button onClick={() => checkUser()}>Login</button>
        {IsValidUser && user === "user" ? (
          <Link to={"/UserDashboard"}>
            <button>Proceed</button>
          </Link>
        ) : (
          ""
        )}
        {IsValidUser && user === "mech" ? (
          <Link to={"/MechDashboard"}>
            <button>Proceed</button>
          </Link>
        ) : (
          " "
        )}
      </div>
      <h3>
        Not Registered ?{" "}
        <Link to={user === "user" ? `/RegisterUser` : `/RegisterMech`}>
          Register
        </Link>
      </h3>
    </div>
  );
}

export default Login;
