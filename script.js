// ==========================
// SCROLL REVEAL
// ==========================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));


// ==========================
// HERO TYPING EFFECT
// ==========================

const roles = [
  "Frontend Developer",
  "Web Developer",
  "UI Enthusiast"
];

const typedText = document.getElementById("typed-text");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typedText) return; // Safety check

  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typedText.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      setTimeout(() => (isDeleting = true), 1200);
    }
  } else {
    typedText.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 90);
}

typeEffect();


// ==========================
// HAMBURGER MENU
// ==========================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}


// ==========================
// DARK / LIGHT THEME TOGGLE
// ==========================

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Apply saved theme immediately
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.toggle("dark", savedTheme === "dark");
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  body.classList.toggle("dark", prefersDark);
}

if (toggleBtn) {

  updateIcon();

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    const currentTheme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);

    updateIcon();
  });

  function updateIcon() {
    toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
  }
}
// ==========================
// SCROLL REVEAL (FOR PERIPHERALS)
// ==========================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => revealObserver.observe(el));


// ==========================
// PERIPHERAL MODAL (SAFE)
// ==========================

document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("peripheralModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalDetails = document.getElementById("modalDetails");
  const modalClose = document.getElementById("modalClose");

  if (!modal) return;

  document.querySelectorAll(".peripheral-card").forEach(card => {
    card.addEventListener("click", () => {
      modalTitle.textContent = card.dataset.title || "";
      modalDescription.textContent = card.dataset.description || "";
      modalDetails.textContent = card.dataset.details || "";

      modal.classList.add("active");
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

});


// ==========================
// 3D HOVER TILT EFFECT
// ==========================

document.querySelectorAll(".peripheral-card").forEach(card => {

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });

});


if (window.innerWidth > 768) {
  document.querySelectorAll(".peripheral-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });

  });
}
