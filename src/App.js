import React, { useState } from "react";
import "./styles.css";

const flagDictionary = {
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🏳️": "White Flag",
  "🏳️‍🌈": "Rainbow Flag",
  "🏳️‍⚧️": "Transgender Flag",
  "🏴‍☠️": "Pirate Flag",
  "🇮🇳": "India",
  "🇺🇸": "United States",
  "🇨🇳": "China"
};

var flags = Object.keys(flagDictionary);
export default function App() {
  const [meaning, setmeaning] = useState("");
  function flagInputHandler(event) {
    var userInput = event.target.value;
    var meaning = flagDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry this flag is not in our database!";
    }
    setmeaning(userInput + meaning);
  }

  function flagClickHandler(flag) {
    setmeaning(flag + " " + flagDictionary[flag]);
  }

  return (
    <div className="App">
      <h1>Flag Interpretor</h1>
      <input onChange={flagInputHandler} />
      <h2>{meaning}</h2>
      <h3>Flags we know</h3>
      {flags.map(function (flag) {
        return (
          <span
            onClick={() => flagClickHandler(flag)}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
            key={flag}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}
