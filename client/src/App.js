import React from "react";
import Navigation from "./Components/navigationBar";
import Footer from "./Components/footer";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Musicians from "./pages/musicians";
import SignUp from "./Components/SignUp";
import Nopath from "./pages/nopath";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="body">
        <p
          style={{
            backgroundColor: "white",
            margin: 0,
            paddingTop: "0.05em"
          }}
        />
        <Navigation />
        <div style={{ paddingTop: "3em" }} />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/musicians" exact component={Musicians} />

          <Route path="/profile/:id" component={Profile} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/" exact component={Home} />
          <Route component={Nopath} />
        </Switch>
        <Footer className="footer fixed-bottom " />
      </div>
    </Router>
  );
}

export default App;
