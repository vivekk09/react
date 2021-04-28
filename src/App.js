import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😜": "Wink"
};

export default function App() {
  const [emoji, setEmoji] = useState("");

  var ouremojis = Object.keys(emojiDictionary);

  function emojiClickHandler(emoji) {
    var result = emojiDictionary[emoji];
    setEmoji(result);
  }

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

      <h3>Emojis we have:</h3>
      {ouremojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ cursor: "pointer", fontSize: "2rem" }}
          key={emoji}
        >
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
