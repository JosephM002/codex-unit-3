import { useEffect, useState } from "react";
import { MOUNT_PHASE } from "../data/lifecycle.js";
import { data } from "../data.js";

export function Main() {
  const [didMount, setDidMount] = useState(false);
  const [subjects, setSubjects] = useState(false);
  useEffect(componentDidMount, MOUNT_PHASE);
  return (
    <main>
      <p>{"DidMount: " + didMount}</p>
      <section>{"Subjects: " + subjects} </section>
      <p></p>
    </main>
  );
  function componentDidMount(event) {
    event.preventDefault();
    setDidMount(true);
    debugger;
  }
}
