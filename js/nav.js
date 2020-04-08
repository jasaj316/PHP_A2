//This is a script that allows viewing/hiding navbar with small screen widths
let mQuery = window.matchMedia("screen and (min-width: 800px)");
const hamb = document.querySelector(".hamb");
const uList = document.querySelector("nav ul");
const lists = [...document.querySelectorAll("ul li")];

function hide() {
  lists.forEach((i) => i.classList.toggle("vis"));
  uList.classList.toggle("bgVis");
}
hamb.addEventListener("click", hide);
