import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const message1 =
    "Create react variables by importing them from other pages, or simply adding them to the code";
  const message2 =
    "Use react variables by pasting the variable name into curly brackets while inside html";
  return (
    <body>
      <h1> react variables</h1>
      <p>{message1}</p>
      <p>{message2}</p>
    </body>
  );
}

export default App;
