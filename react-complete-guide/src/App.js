import React, { useState } from "react";
import "./App.css";
import Person from "./Person/person";

const App = () => {
  const [personState, setPersonState] = useState({
    person: [
      { name: "Vladis", age: 29 },
      { name: "Roman", age: 26 },
      { name: "Yankel", age: 26 },
    ],
  });

  const swichNameHandler = () => {
    setPersonState({
      person: [
        { name: "Vladimir", age: 29 },
        { name: "Roman", age: 26 },
        { name: "Yankel", age: 25 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, My first react app</h1>
      <button onClick={swichNameHandler}>Swich text</button>
      <Person name={personState.person[0].name} age={personState.person[0].age}>
        This is "children" text
      </Person>
      <Person
        name={personState.person[1].name}
        age={personState.person[1].age}
      />
      <Person
        name={personState.person[2].name}
        age={personState.person[2].age}
      />
    </div>
  );
};

export default App;
