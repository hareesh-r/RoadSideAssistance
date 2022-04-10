import React, { useState } from 'react'
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Register({user}) {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Location, setLocation] = useState("");
    const [Shop, setShop] = useState("");
    const [Phone, setPhone] = useState(0);
    const [Cost, setCost] = useState(0);
    const [Email, setEmail] = useState("");
    console.log(user);
  return (
    <div className='Login flex col'>
        {
          (user=="user") ? <>
          
          <div className="flex col login-container">
            <div className="input-grp flex row">
                <h1>Username</h1>
                <input onChange={(e)=>{
                    setUsername(e.target.value)
                }} type="text" placeholder="Username" />
            </div>
            <div onChange={(e)=>{
                setPassword(e.target.value)
            }} className="input-grp flex row">
                <h1>Password </h1>
                <input type="password" placeholder="Password" />
            </div>
            <button onClick={()=>console.log(Username+" "+Password)}>
                Register
            </button>
        </div>
        <h3>
            Already Have an Account ? <Link to="/LoginUser">Login</Link>
        </h3>
          
          
          
          </> : <>
          
          
          <div className="flex col login-container">
            <div className="input-grp flex row">
                <h1>Username</h1>
                <input onChange={(e)=>{
                    setUsername(e.target.value)
                }} type="text" placeholder="Username" />
            </div>
            <div onChange={(e)=>{
                setPassword(e.target.value)
            }} className="input-grp flex row">
                <h1>Password </h1>
                <input type="password" placeholder="Password" />
            </div>

            <div onChange={(e)=>{
                setLocation(e.target.value)
            }} className="input-grp flex row">
                <h1>Location </h1>
                <input type="text" placeholder="Location" />
            </div>

            <div onChange={(e)=>{
                setShop(e.target.value)
            }} className="input-grp flex row">
                <h1>Shop Name</h1>
                <input type="text" placeholder="Shop Name" />
            </div>

            <div onChange={(e)=>{
                setCost(e.target.value)
            }} className="input-grp flex row">
                <h1>Base Cost </h1>
                <input type="text" placeholder="Base Cost" />
            </div>

            <div onChange={(e)=>{
                setPhone(e.target.value)
            }} className="input-grp flex row">
                <h1>Phone Number </h1>
                <input type="phone" placeholder="Phone Number" />
            </div>

            <div onChange={(e)=>{
                setEmail(e.target.value)
            }} className="input-grp flex row">
                <h1>Email </h1>
                <input type="email" placeholder="Email" />
            </div>

            <button onClick={()=>console.log(Username+" "+Password+" "+Email+" "+Cost+" "+Phone+" "+Shop+" "+Location)}>
                Register
            </button>
        </div>
        <h3>
            Already Have an Account ? <Link to="/LoginMech">Login</Link>
        </h3>
          
          
          
          
          </>
        }
    </div>
  )
}

export default Register