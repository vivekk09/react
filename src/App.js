import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling"
};

var shoppingList = ["milk", "eggs", "bread", "banana"];

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

  function getBg(index) {
    if (index % 2 === 0) {
      return "blue";
    }
    return "green";
  }

  return (
    <div className="App">
      <h1>Interpret</h1>
      <input onChange={emojiHandler}></input>
      <div> Interpretation: {emoji} </div>

      <ul>
        {shoppingList.map((item, index) => {
          return (
            <li key={item} style={{ backgroundColor: getBg(index) }}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
