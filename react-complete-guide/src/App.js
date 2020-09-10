import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, My firest react app</h1>
        <Person />
      </div>
    );
  }
}

export default App;
