const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "pink",
  "black",
  "white",
];
const foods = [
  "milk",
  "rice",
  "chocolate",
  "apple",
  "banana",
  "grape",
  "steak",
  "potato",
  "rice, again",
];
showItems(colors);
showItems(foods);
function showItems(variable) {
  for (var i = 0; i < variable.length; i++) {
    console.log(i + 1 + ". " + variable[i]);
  }
}
