import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likeCount, setlikeCount] = useState(0);

  function likehandler() {
    var newlikeCount = likeCount + 1;
    setlikeCount(newlikeCount);
  }

  return (
    <div className="App">
      <h1>Interpret</h1>
      <button onClick={likehandler}>Like Me!</button> {likeCount}
    </div>
  );
}
