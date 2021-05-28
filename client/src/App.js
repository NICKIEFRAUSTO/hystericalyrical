import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (

    <Router>
      <div>
       <Navbar />
        <Switch>
          <Route exact path={["/","/Home"]}>
          <Home />
          <Route />
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup/>
          </Route>
        </Switch>
      </div>
    </Router>
   
   

  );
}

export default App;
