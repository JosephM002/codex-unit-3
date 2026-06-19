import figlet from "figlet";
doStuff();

async function doStuff() {
  const text = await figlet.text("Hello figlet!");
  console.log(text);
}
