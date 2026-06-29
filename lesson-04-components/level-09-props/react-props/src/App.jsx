import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";

function App() {
  return (
    <>
      <Header title="React Props"></Header>
      <Main message="To use props add an attribute (props) to the parameter of a function, then access values from that attribute"></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
