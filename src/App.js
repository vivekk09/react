import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling"
};

export default function App() {
  const [emoji, setEmoji] = useState("");

  function emojiHandler(event) {
    var userEmoji = event.target.value;
    var result = emojiDictionary[userEmoji];

    if (result === undefined) {
      result = "We don't have this emoji in our database!";
    }
    setEmoji(result);
  }

  return (
    <div className="App">
      <h1>Interpret</h1>
      <input onChange={emojiHandler}></input>
      <div> Interpretation: {emoji} </div>
    </div>
  );
}
