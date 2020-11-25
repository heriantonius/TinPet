import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from "./Components/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
        </Route>
        <Route exact path="/login"> 
        <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
