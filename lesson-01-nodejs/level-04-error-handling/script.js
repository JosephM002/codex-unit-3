console.log("Attempting to access browser features...");
try {
  const p = "attempt 2";
  const store = localStorage.setItem("p", p);
  const attempt = document.querySelector("p");
} catch {
  console.log(
    "There has been an error, local Storage and document are items that come from browsers",
  );
}
