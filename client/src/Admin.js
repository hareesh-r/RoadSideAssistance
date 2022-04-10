import React, { useState } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import deleteIcon from "./asset/img/delete.png";
import "./App.css";
function Admin() {
  const [Login, setLogin] = useState(false);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [viewMech, setViewMech] = useState(false);
  const [viewUser, setViewUser] = useState(false);
  const [MechData, setMechData] = useState([]);
  const [UserData, setUserData] = useState([]);
  const getMechanics = () => {
    Axios.get("http://localhost:3001/getMechanics")
      .then((response) => { 
        setMechData(response.data);
        console.log(response.data);
      })
      .then(() => {
        setViewMech(!viewMech);
      });
  };
  const getUsers = () => {
    Axios.get("http://localhost:3001/getUsers")
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
      })
      .then(() => {
        setViewUser(!viewUser);
      });
  };
  const deleteMechanic = (id) => {
    Axios.delete(`http://localhost:3001/deleteMechanic/${id}`).then(()=>{
        console.log("deleted")
    })
  }

  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3001/deleteUser/${id}`).then(()=>{
        console.log("deleted")
    })
}
  return (
    <div className="Admin flex col">
        <h1>Welcome Admin!</h1>
      {!Login ? (
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
          <button
            onClick={() => {
              if (Username == "Admin" && Password == "Admin@123") {
                setLogin(true);
              }else{
                  alert("Invalid Username or Password");
              }
            }}
          >
            Login
          </button>
        </div>
      ) : (
        <>
          <div className="list-wrapper">
            <button onClick={() => getMechanics()}>View Mechanics</button>
            <button onClick={() => getUsers()}>View Users</button>
            <Link to="/"><button>Logout</button></Link>
          </div>

          <div className="list-wrapper">
            <div className="view-mechanics">
              {viewMech ? (
                <>
                  {MechData.map((data, index) => (
                    <div className="mechanic-card flex row" key={index}>
                      <div className="left flex col">
                          
                        <div className="content">
                          Username : {data.username}
                        </div>
                        <div className="content">Email : {data.email}</div>
                        <div className="content">
                          Location : {data.location}
                        </div>
                      </div>
                      <img onClick={()=>{
                          deleteMechanic(data.mechid)
                      }} src={deleteIcon} alt="" />
                      <div className="left flex col">
                        <div className="content">
                          Contact Number : {data.phone_num}
                        </div>
                        <div className="content">
                          Shop Name : {data.shop_name}
                        </div>
                        <div className="content">
                          Base Cost : {data.base_cost}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>No Mechanics Found!</>
              )}
            </div>
            <div className="view-mechanics view-user">
              {viewUser ? (
                <>
                  {UserData.map((data, index) => (
                    <div className="mechanic-card flex row" key={index}>
                      <div className="left flex col">
                        <div className="content">
                          Username : {data.username}
                        </div>
                        <div className="content">Email : {data.email}</div>
                        <div className="content">
                          Location : {data.location}
                        </div>
                        <div className="content">
                          Problem : {data.problem}
                        </div>
                      </div>
                      <img onClick={()=>{
                          deleteUser(data.userid)
                      }} src={deleteIcon} alt="" />
                      <div className="left flex col">
                        <div className="content">
                          Contact Number : {data.phone_num}
                        </div>
                        <div className="content">
                            Vehicle Type : {data.vehicle_type}
                        </div>
                        <div className="content">
                          Vehicle Model : {data.vehicle_model}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>No Users Found!</>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Admin;
