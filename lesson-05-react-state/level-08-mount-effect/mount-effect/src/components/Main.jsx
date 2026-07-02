import { useEffect, useState } from "react";
export function Main() {
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []);
  return (
    <main>
      <p>{"DidMount: " + didMount}</p>
      <p>
        {" "}
        UseEffect is a react function that takes a callback function and a list
        of variables. When those variables are changed, the callback function is
        called.{" "}
      </p>
    </main>
  );
  function componentDidMount(event) {
    event.preventDefault();
    setDidMount(true);
    debugger;
  }
}
