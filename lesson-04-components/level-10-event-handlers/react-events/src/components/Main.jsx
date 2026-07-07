export function Main(props) {
  return (
    <main>
      <button onClick={handleClick}> Click Event </button>
    </main>
  );
}
function handleClick(event) {
  event.preventDefault();
  console.log(
    "Use click functions by adding a function to perform an action when a button is clicke, then an onClick= inside the return ",
  );
}
