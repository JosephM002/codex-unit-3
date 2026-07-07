import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Footer } from "./components/Footer.jsx";
import { Main } from "./components/Main.jsx";
import { Header } from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
