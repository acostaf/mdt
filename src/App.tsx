import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./login";
import { Home } from "./home";

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = { currentUser: {} };
  }

  render() {
    return (
      <Router basename="/mdt">
        <>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </>
      </Router>
    );
  }
}

export default App;
