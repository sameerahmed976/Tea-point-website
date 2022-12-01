import "./style.css";

const closeButton = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const link = document.querySelectorAll(".link");
const menuHamburger = document.querySelector(".menu__hamburger");

overlay.style.width = "0px";
closeButton.addEventListener("click", () => {
  overlay.style.width = "0px";
});

menuHamburger.addEventListener("click", () => {
  overlay.style.width = "100%";
});

// link.forEach((element) => {
//   element.addEventListener("click", () => {
//     overlay.style.width = "0px";
//   });
// });
