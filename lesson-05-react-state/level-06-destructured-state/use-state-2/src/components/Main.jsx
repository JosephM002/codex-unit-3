import { useState } from "react";

export function Main() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <p>{count}</p>
      <button onClick={handleClick}> Click Counter </button>
      <p>
        {" "}
        Use State is an array that has a stateful variabele (a variable that
        preserves value between calls) and a function.{" "}
      </p>
    </main>
  );
  function handleClick(event) {
    event.preventDefault();
    setCount(count + 1);
  }
}
