import React, { Component } from "react";
import { Route, HashRouter as Router } from 'react-router-dom';
import AppLayout from './AppLayout';
import Login from '../pages/Login';
import Signup from '../pages/Sinup';
import AddVoca from '../pages/AddVoca';
import Exam from '../pages/Exam';

class App extends React.Component {
  render() {
    return (
      <Router >
          <AppLayout />
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/addvoca" component={AddVoca} />
            <Route exact path="/exam" component={Exam} />
          </div>
      </Router>
    );
  }
}

export default App;
