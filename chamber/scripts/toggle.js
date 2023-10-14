let toggler = document.querySelector(".toggler");
let overlay = document.querySelector(".overlay");

toggler.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
  toggler.classList.toggle("show-nav");
});

overlay.addEventListener("click", () => {
  document.body.classList.remove("show-nav");
  toggler.classList.remove("show-nav");
});