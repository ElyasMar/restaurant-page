import "./styles.css";

// Content
const contentDiv = document.getElementById("content");
contentDiv.textContent = `Our signature steak and burger selection is built for those who appreciate quality without compromise. From tender, flame-grilled steaks bursting with deep, smoky flavor to juicy, handcrafted burgers layered with fresh, high-quality ingredients — every element is designed to elevate your dining experience.`;

// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// Mobile hamburger
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

// Fade-in sections on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".story-inner, .about-inner").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(28px)";
  el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
  observer.observe(el);
});