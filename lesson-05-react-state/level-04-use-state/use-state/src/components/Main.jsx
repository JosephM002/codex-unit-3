import { useState } from "react";
export function Main() {
  const results = useState(0);
  let count = 0;
  debugger;
  return (
    <main>
      <p>{count}</p>
      <button onClick={handleClick}> Click Event </button>
    </main>
  );
  function handleClick(event) {
    event.preventDefault();
    count = count + 1;
  }
}
