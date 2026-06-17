console.log("Attempting to access browser features...");
const p = "attempt 1";
const store = localStorage.setItem("p", p);
const attempt = document.querySelector("p");
