import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import { UserContext } from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
function Dashboard({ user }) {
  const { CurrentUser, setCurrentUser } = useContext(UserContext);
  const [RequestContent, setRequestContent] = useState([]);
  const [FeedBackContent, setFeedBackContent] = useState([]);
  const [ShowRequest, setShowRequest] = useState(true);
  const [ShowFeedBack, setShowFeedBack] = useState(false);
  const [ShowPostFeedBack, setShowPostFeedBack] = useState(false);
  const [mechid, setMechid] = useState(0);

  function getRequest() {
    Axios.get(`http://localhost:3001/request`, {
      params: {
        mechid: CurrentUser.mechid,
      },
    }).then((response) => {
      setRequestContent(response.data);
    });
  }
  function getFeedBacks() {
    Axios.get(`http://localhost:3001/feedback`, {
      params: {
        mechid: CurrentUser.mechid,
      },
    }).then((response) => {
      setFeedBackContent(response.data);
    });
  }
  useEffect(() => {
    getRequest();
    getFeedBacks();
    console.log(CurrentUser);
  }, []);

  return (
    <div className="UserDashboard flex row">
      <div className="container flex col">
        {user === "user" ? (
          <>
            <Link to="/SearchMechanic">
              <button>Search Mechanic</button>
            </Link>
            <button onClick={() => {
              setShowPostFeedBack(!ShowPostFeedBack)
            }}>Post Feedback</button>
          </>
        ) : (
          <>
            <button onClick={() => {
              setShowRequest(!ShowRequest)
              setShowFeedBack(!ShowFeedBack)
            }}>View Request</button>
            <button onClick={() => {
              setShowRequest(!ShowRequest)
              setShowFeedBack(!ShowFeedBack)
            }}>View Feedback</button>
          </>
        )}
        <Link to="/"><button>Logout</button></Link>
      </div>
      <div className="request-cards flex col">
        {ShowRequest &&
          RequestContent.map((request) => (

            <div onClick={() => {
              Axios.get(
                `http://localhost:3001/getUsersByID`,
                {
                  params: {
                    userid: request.userid,
                  },
                }
              ).then((response) => {
                console.log(response.data)
                alert("Email : " + response.data[0].email + "\n" + "Phone Number : " + response.data[0].phone_num + "\n" + "Name : " + response.data[0].username + "\n" + "Location : " + response.data[0].location + "\n" + "Problem : " + response.data[0].problem + "\n" + "Vehicle Model : " + response.data[0].vehicle_model + "\n" + "Vehicle Type : " + response.data[0].vehicle_type)
              });
            }} key={request.reqid} className="pointer request-card flex col">
              <div>Request Given By UserID : {request.userid}</div>
              <div>Request : {request.request_content}</div>
              <div>Request ID : {request.reqid}</div>
            </div>

          ))
        }
        {ShowFeedBack &&
          FeedBackContent.map((request) => (
            <div key={request.reqid} className="request-card flex col">
              <div>FeedBack Given By UserID : {request.userid}</div>
              <div>FeedBack : {request.feedback_content}</div>
              <div>FeedBack ID : {request.feedid}</div>
            </div>
          ))
        }
        {
          user === "user" && ShowPostFeedBack && <div className="margin-10 input-grp flex col">
            <h1>Post Feedback Here</h1>
            <input onChange={(e) => {
              setFeedBackContent(e.target.value)
            }} placeholder="Enter Your Feedback" type="text" />
            <input onChange={(e) => {
              setMechid(e.target.value)
            }} placeholder="Enter Mechanic ID" type="number" />
            <button onClick={() => {
              Axios.post(`http://localhost:3001/feedback`, {
                userid: CurrentUser.userid,
                feedback_content: FeedBackContent,
                mechid: mechid
              }).then((response) => {
                console.log(response.data)
                alert("Feedback Posted");
              })
            }} >Post!</button>
          </div>
        }
        {
          ShowFeedBack && FeedBackContent.length === 0 && 
          <div>No Feedbacks!</div>
        }
        {
          ShowRequest && RequestContent.length === 0 && 
          <div>No Requests!</div>
        }
      </div>
    </div>
  );
}

export default Dashboard;
