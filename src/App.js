import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [value, setValue] = useState("");
  function inputHandler(event) {
    //console.log(event.target.value)
    setValue(event.target.value);
  }
  return (
    <div className="App">
      <h1>Interpret</h1>
      <input onChange={inputHandler}></input>
      <div>Welcome {value}</div>
    </div>
  );
}
