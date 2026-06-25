import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Title } from "./components/Title.jsx";
import { Info } from "./components/Info.jsx";

function App() {
  return (
    <main>
      <Title />
      <Info />
    </main>
  );
}

export default App;
