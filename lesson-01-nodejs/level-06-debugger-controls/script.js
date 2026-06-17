console.log("Attempting to access browser features...");
try {
  const p = "Attempt 3";
  const store = localStorage.setItem("p", p);
  const attempt = document.querySelector("p");
} catch (error) {
  console.log(
    "use debugger controls by clicking start, continue, stop and so on. You can click next to a line of code to set a stop point",
  );
  debugger;
}
