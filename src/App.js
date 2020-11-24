import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
