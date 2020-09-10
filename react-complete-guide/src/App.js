import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, My first react app</h1>
        <Person name="Vladis" age="29">
          Some text here
        </Person>
        <Person name="Roman" age="26" />
        <Person name="Yankel" age="26" />
      </div>
    );
  }
}

export default App;
