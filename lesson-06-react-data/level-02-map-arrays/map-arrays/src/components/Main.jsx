import { useEffect, useState } from "react";
import { MOUNT_PHASE } from "../data/lifecycle";
import { data } from "../data.js";

export function Main() {
  const [didMount, setDidMount] = useState(false);
  const [subjects, setSubjects] = useState(false);
  useEffect(componentDidMount, MOUNT_PHASE);
  return (
    <main>
      <p>{"DidMount: " + didMount}</p>
      <section>{"Subjects: " + subjects} </section>
      <p>
        {" "}
        To render a Data array with HTML, import the array, set up a function
        with the import in the component. render the array values in HTML, then
        save them. Finally save the HTML as a variable and import that into your
        return statement.{" "}
      </p>
    </main>
  );
  function componentDidMount(event) {
    event.preventDefault();
    setDidMount(true);
    debugger;
  }
  const details = details.map(toDetails);

  function toDetails(dataItem) {
    const details = (
      <details>
        <summary>{dataItem.name}</summary>
        {dataItem.description}
      </details>
    );
    setSubjects(details);
  }
}
