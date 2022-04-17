import { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "./Admin";
import "./App.css";
import Intro from "./Intro";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Welcome from "./Welcome";
import SearchMechanic from "./SearchMechanic";

export const UserContext = createContext();
function App() {
  const [showIntro, setshowIntro] = useState(true);
  const [CurrentUser, setCurrentUser] = useState([]);
  const [CurrentUserType, setCurrentUserType] = useState("user");
  useEffect(() => {
    setTimeout(() => {
      setshowIntro(false);
    }, 3500);
  }, []);

  return (
    <UserContext.Provider
      value={{
        CurrentUser,
        setCurrentUser,
        CurrentUserType,
        setCurrentUserType,
      }}
    >
      <Router>
        <Switch>
          <Route path="/LoginUser">
            <Login user={"user"} />
          </Route>
          <Route path="/LoginMech">
            <Login user={"mech"} />
          </Route>
          <Route path="/LoginAdmin">
            <Admin />
          </Route>
          <Route path="/RegisterUser">
            <Register user={"user"} />
          </Route>
          <Route path="/RegisterMech">
            <Register user={"mech"} />
          </Route>
          <Route path="/UserDashboard">
            <Dashboard user={"user"} />
          </Route>
          <Route path="/MechDashboard">
            <Dashboard user={"mech"} />
          </Route>
          <Route path="/SearchMechanic">
            <SearchMechanic />
          </Route>
          <Route path="/">
            <div className="App flex">
              {showIntro ? <Intro /> : <Welcome />}
            </div>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
