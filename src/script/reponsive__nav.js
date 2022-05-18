const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelectorAll(".nav__link");
const navItems = document.querySelectorAll(".nav__item");

// Responsive nav
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Sub menu
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navItem.classList.toggle("active");
  });
});
