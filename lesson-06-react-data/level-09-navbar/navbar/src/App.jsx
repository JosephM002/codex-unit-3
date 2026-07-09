import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element="{Home /}"></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
