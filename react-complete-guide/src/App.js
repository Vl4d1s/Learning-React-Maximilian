import React, { useState } from "react";
import "./App.css";
import person from "./Person/person";
import Person from "./Person/person";

const App = () => {
  const [personState, setPersonState] = useState({
    person: [
      { name: "Vladis", age: "29" },
      { name: "Roman", age: "26" },
      { name: "Yankel", age: "25" },
    ],
  });

  const changePersonHandler = () => {
    setPersonState({
      person: [
        { name: "Vladimir", age: "29" },
        { name: "Roman", age: "26" },
        { name: "Yankel", age: "27" },
      ],
    });
  };

  return (
    <div>
      <Person
        name={personState.person[0].name}
        age={personState.person[0].age}
      />
      <Person name={personState.person[1].name} age={personState.person[1].age}>
        Some text here
      </Person>
      <Person
        name={personState.person[2].name}
        age={personState.person[2].age}
      />
      <button onClick={changePersonHandler}>Click me!</button>
    </div>
  );
};

export default App;
