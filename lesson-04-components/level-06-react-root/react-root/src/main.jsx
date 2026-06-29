import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
const divTag = createRoot.render(document.getElementById("root"))(
  <main>
    <h1> React Root </h1>
    <p> I have absoloutely no clue how react root works, hope this helps! </p>
  </main>,
);
const root = divTag;
