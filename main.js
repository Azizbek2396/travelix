// Selectors

let header = document.querySelector(".header");
let hamburberMenu = document.querySelector(".hamburger-menu");

window.addEventListener('scroll', function () {
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("active", windowPosition);
})

hamburberMenu.addEventListener("click", function () {
  header.classList.toggle("menu-open");
});
