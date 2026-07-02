export function Main() {
  let count = 0;
  return (
    <main>
      <p>{count}</p>
      <button onClick={handleClick}> Click counter </button>
      <p>
        {" "}
        Stateless variables have no defined state. They will update as needed
        when an action occurs. They are not reset along with the rest of the
        object
      </p>
    </main>
  );
  function handleClick(event) {
    event.preventDefault();
    setCount(count + 1);
  }
}
