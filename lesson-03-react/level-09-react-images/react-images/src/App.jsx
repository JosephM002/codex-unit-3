import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import soapImg from "./assets/image.png";
import "./App.css";

function App() {
  return (
    <body>
      <h1> react images</h1>
      <p>
        {" "}
        to add local images to react, navigate to the src folder, then the
        assests folder, and add an image there. Then, import the image from the
        folder. After, add the new variable to the src on brackets{" "}
      </p>
      <img src={soapImg} />
      <img></img>
      <img></img>
    </body>
  );
}

export default App;
