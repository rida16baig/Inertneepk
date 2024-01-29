let hamburger = document.getElementById("menuToggle");
let header = document.getElementById("header");
let main = document.getElementById("main");

hamburger.addEventListener("click", function () {
  header.classList.toggle("active");
 main.classList.toggle("active");
});
