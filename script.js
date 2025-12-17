const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  reveals.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}


const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});



window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});


const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");
