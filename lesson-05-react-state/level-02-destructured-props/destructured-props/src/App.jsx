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
      <Header title="Destructured Props"></Header>
      <Main message="You can destructure props by adding a property to the paramaters of the function and calling it"></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
