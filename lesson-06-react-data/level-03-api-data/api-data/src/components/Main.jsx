import { useEffect, useState } from "react";
import { MOUNT_PHASE } from "../data/lifecycle.js";
import { data } from "../data.js";

export function Main() {
  const [didMount, setDidMount] = useState(false);
  const [characters, setCharacters] = useState(false);
  useEffect(componentDidMount, MOUNT_PHASE);
  return (
    <main>
      <p>{"DidMount: " + didMount}</p>
      <section>{"Characters: " + characters} </section>
      <p>
        TODO: .map can be used to render data from an API by calling the api,
        then using its info in a function that displays HTML with the API
        values, then saving the HTML and rendering it in the main return
        statement{" "}
      </p>
    </main>
  );
  async function handleData(event) {
    event.preventDefault();
    const waiting = await fetch(
      "https://potterapi-fedeperin.vercel.app/en/characters",
    );
    const receive = await waiting.json();
    const data = receive;
    const details = data.map(toCharacters);
    setCharacters(details);
  }
  function componentDidMount(event) {
    event.preventDefault();
    setDidMount(true);
    handleData();
    debugger;

    setSubjects(details);
    function toCharacters(dataItem) {
      const details = (
        <details>
          <summary>{dataItem.name}</summary>
          {dataItem.description}
          <figure>
            <img src={dataItem.image}></img>
            <figcaption>{dataItem.actor}</figcaption>
          </figure>
        </details>
      );
      const characters = details.map(toDetails);
    }
  }
}
