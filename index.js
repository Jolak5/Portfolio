const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.style.overflow = "hidden";
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    navMenu.style.display = "none";
  })
);
