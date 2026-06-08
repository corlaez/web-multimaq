/* MultiMAQ Peru — Minimal JS */

(function () {
  "use strict";

  
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('SW registered:', reg))
        .catch((err) => console.log('SW failed:', err));
    });
  }

  /* ---- Mobile Nav Toggle ---- */
  const toggle = document.querySelector(".header__toggle");
  const nav = document.querySelector("#main-nav");

  // Create overlay element for mobile nav
  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  document.body.appendChild(overlay);

  function openNav() {
    nav.classList.add("is-open");
    overlay.classList.add("is-visible");
    toggle.setAttribute("aria-expanded", "true");
  }

  function closeNav() {
    nav.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    isOpen ? closeNav() : openNav();
  });

  overlay.addEventListener("click", closeNav);

  // Close nav when a link is clicked
  nav.querySelectorAll(".nav__link").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  /* ---- Sticky header shadow on scroll ---- */
  const header = document.querySelector("#header");

  window.addEventListener(
    "scroll",
    function () {
      header.classList.toggle("header--scrolled", window.scrollY > 10);
    },
    { passive: true }
  );

  // Inject the shadow style once
  var style = document.createElement("style");
  style.textContent =
    ".header--scrolled{box-shadow:0 2px 12px rgba(0,0,0,.08)}";
  document.head.appendChild(style);
})();
