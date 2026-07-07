import { useEffect, useState } from "react";
import { MOUNT_PHASE } from "../data/lifecycle.js";
import { data } from "../data.js";

export function Main() {
  const [didMount, setDidMount] = useState(false);
  const [characters, setCharacters] = useState();
  useEffect(componentDidMount, []);
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="number" name="max">
          <label></label>
        </input>
        <submit> Submit Here ! </submit>
      </form>
      <p>{"DidMount: " + didMount}</p>
      <section>{"Characters: " + characters} </section>
      <p>
        TODO: to accept user input in an API, build an input, convert the values
        into a data object, convert that into a dataString and use the new
        paramaters to Fetch the API.
      </p>
    </main>
  );
  async function handleData(event) {
    debugger;
    event.preventDefault();
    const waiting = await fetch(
      "https://potterapi-fedeperin.vercel.app/en/characters",
    );
    const receive = await waiting.json();
    const data = receive;
    const details = data.map(toCharacters);
    setCharacters(details);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = {
      max: form.elements.max.value,
    };
    const dataString = new URLSearchParams(data);
    const waiting = await fetch(
      "https://potterapi-fedeperin.vercel.app/en/characters" + "?" + dataString,
    );
    const receive = await waiting.json();
    const details = results.map(toCharacters);
    setCharacters(details);
  }
  function componentDidMount(event) {
    event.preventDefault();
    setDidMount(true);
    handleData();
  }
}

function toCharacters(dataItem, index) {
  const key = index + dataItem.fullName;
  const details = (
    <details key={key}>
      <summary>{dataItem.fullName}</summary>
      {dataItem.description}
      <figure>
        <img src={dataItem.image} />
        <figcaption>{dataItem.interpretedBy}</figcaption>
      </figure>
    </details>
  );
  return details;
  const characters = details.map(toDetails);
}
