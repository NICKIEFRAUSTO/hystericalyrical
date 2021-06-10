import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        
        <Switch>
                 
          <Route exact path="/Login">
            <Login />
          </Route>

          <Route exact path="/Signup">
            <Signup />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
