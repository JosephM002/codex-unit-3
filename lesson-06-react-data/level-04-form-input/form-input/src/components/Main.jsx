import { useState } from "react";

export function Main() {
  const [values, setValue] = useState();
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input name="first">
          <label> Choice 1 </label>
        </input>
        <input name="second">
          <label> Choice 2 </label>
        </input>
        <input name="third">
          <label> Choice 3 </label>
        </input>
        <button> Submit Here </button>
        <output>{values}</output>
      </form>
    </main>
  );
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInputs = [
      { label: "Email", value: form.elements.first.value },
      { label: "Username", value: form.elements.second.value },
      { label: "Number", value: form.elements.third.value },
    ];
  }
}
// on step 17
