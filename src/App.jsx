import React from 'react'

//  Link Files
import "./App.css";
import "./Responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Supportus from './Pages/Supportus';


function App() {
  return (
    <>
      <Router>        
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Supportus">
            <Supportus/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
