import React, { Component } from "react";
import { hot } from "react-hot-loader";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* navbar */}
        <div className="row no-margin-bottom red lighten-2 navbar">
          <div className="col s4 m3 l2 red lighten-3 navbar-logo">
            <i
              className="fas fa-fan fa-spin"
              style={{ verticalAlign: "middle" }}
            ></i>
            <span style={{ marginLeft: "20px", verticalAlign: "middle" }}>
              Logo
            </span>
          </div>
          <div className="col s8 m9 l10"></div>
        </div>

        {/* main */}
        <div className="row no-margin-bottom main">
          {/* left sidebar */}
          <div className="col s4 m3 l2 teal lighten-2 sidebar"></div>

          {/* content */}
          <div className="col s8 m9 l10 teal darken-2 content"></div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
