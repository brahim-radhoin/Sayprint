// Main JavaScript file

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => observer.observe(el));

  // Theme Toggle Logic
  const themeToggle = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("theme");
  const body = document.body;

  if (storedTheme) {
    body.setAttribute("data-theme", storedTheme);
    updateToggleIcon(storedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";

      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateToggleIcon(newTheme);
    });
  }

  function updateToggleIcon(theme) {
    if (themeToggle) {
      themeToggle.textContent = theme === "light" ? "🌙" : "☀️";
    }
  }

  // Back to Top Logic
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  console.log("SayPrint Visuals Initialized");
});
