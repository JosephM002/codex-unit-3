import { useEffect, useState } from "react";

export function Main() {
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []);
  return (
    <main>
      <p> This is the correct page</p>
      <p> {"didMount: " + didMount} </p>
    </main>
  );
  function componentDidMount(event) {
    event.preventDefault();
    setDidMount(true);
  }
}
