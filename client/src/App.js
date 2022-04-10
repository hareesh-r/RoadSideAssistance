import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "./Admin";
import "./App.css";
import Intro from "./Intro";
import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome";

function App() {
  const [showIntro, setshowIntro] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowIntro(false);
    }, 3500);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/LoginUser">
          <Login user={"user"} />
        </Route>
        <Route path="/LoginMech">
          <Login user={"mech"} />
        </Route>
        <Route path="/LoginAdmin">
          <Admin/>
        </Route>
        <Route path="/RegisterUser">
          <Register user={"user"} />
        </Route>
        <Route path="/RegisterMech">
          <Register user={"mech"} />
        </Route>
        <Route path="/">
          <div className="App flex">{showIntro ? <Intro /> : <Welcome />}</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
