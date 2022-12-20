const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
const navItem = document.querySelectorAll(".nav-item");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.style.overflow = "hidden";
});

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function () {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
}
