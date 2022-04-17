import Axios from 'axios';
import React, { useContext, useState } from 'react'
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserContext } from "./App";
function SearchMechanic() {
    const [MechDetails, setMechDetails] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [RequestContent, setRequestContent] = useState("");
    const { CurrentUser, setCurrentUser } = useContext(UserContext);
    return (
        <div className='SearchMechanic flex col'>
            <h1>Search Mechanic</h1>
            <div className="input-grp flex row">
                <input
                    type="text"
                    placeholder="Mechanic Name/Location"
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button onClick={() => {
                    Axios.get(`http://localhost:3001/searchMechanic`, {
                        params: {
                            input: searchText,
                        }
                    })
                        .then(response => {
                            console.log(response.data);
                            setMechDetails(response.data);
                        })
                }}>Search!</button>
            </div>
            {
                MechDetails != null && MechDetails.length > 0 && <div className="request-cards flex col">
                    {MechDetails &&
                        MechDetails.map((request) => (

                            <div key={request.mechid} className="request-card flex row"><div className='rel left flex col'>
                                <div><strong><i className='mechid'>{request.mechid}</i></strong></div>
                                <div>Mechanic Name : <strong>{request.username}</strong></div>
                                <div>Mechanic Email : <strong>{request.email}</strong></div>
                                <div>Shop Name : <strong>{request.shop_name}</strong></div>
                                <div>Contact Number : <strong>{request.phone_num}</strong></div>
                                <div>Location : <strong>{request.location}</strong></div>
                                <div>Base Cost : <strong>{request.base_cost}</strong></div>

                                <div className='input-grp'>
                                    <input onChange={(e) => {
                                        setRequestContent(e.target.value);
                                    }} placeholder='Enter your problem here' type="text" /><button

                                        onClick={() => {
                                            console.log(CurrentUser)
                                            Axios.post(`http://localhost:3001/addProblem`, {
                                                userid: CurrentUser.userid,
                                                mechid: request.mechid,
                                                request_content: RequestContent,
                                            })
                                                .then(response => {
                                                    alert("Request Sent!");
                                                })

                                        }}



                                    >Send Request</button> </div>
                            </div>


                            </div>
                        ))
                    }
                </div>
            }

            <Link to="/"><button>Logout</button></Link>
        </div>
    )
}

export default SearchMechanic