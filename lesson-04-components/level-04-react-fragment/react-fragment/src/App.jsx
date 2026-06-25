import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1> React Fragment </h1>
      </header>
      <body>
        <p>
          {" "}
          React fragments are invisible tags that allow for the display of
          multiple tags at once
        </p>
      </body>
      <footer>
        <p> Any content at all</p>
      </footer>
    </>
  );
}

export default App;
