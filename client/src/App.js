import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Intro from "./Intro";
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
        <Route path="/">
          <div className="App flex">{showIntro ? <Intro /> : <Welcome />}</div>
        </Route>
        <Route path="/Login">{/* Login component  */}</Route>
        <Route path="/Register">{/* Register component */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
