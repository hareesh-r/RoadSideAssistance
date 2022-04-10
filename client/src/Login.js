import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
function Login({user}) {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    console.log(user);
  return (
    <div className='Login flex col'>
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
                Login
            </button>
        </div>
        <h3>
            Not Registered ? <Link to={user=="user" ?`/RegisterUser` : `/RegisterMech`}>Register</Link>
        </h3>
    </div>
  )
}

export default Login