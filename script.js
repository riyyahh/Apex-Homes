const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

function toggleDetails(btn) {
  const current = btn.nextElementSibling;
  const isOpen = current.classList.contains("show");

  document.querySelectorAll(".hidden-details").forEach((box) => {
    box.classList.remove("show");
  });

  if (!isOpen) {
    current.classList.add("show");
  }
}

function search() {
  let input = document.getElementById("searchBox").value.toLowerCase().trim();

  let items = document.querySelectorAll(".listing-card");

  items.forEach((list) => {
    let text = list.textContent.toLowerCase();

    if (text.includes(input)) {
      list.style.display = "";
    } else {
      list.style.display = "none";
    }
  });
}

const navBar = () => {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    hamburger.classList.toggle("toggle");
  });
};

navBar();

function setupScrollReveal() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const revealSelectors = [
    ".hero-content",
    ".about-wrapper",
    ".about-section a",
    ".services-images > div",
    ".services-section a",
    ".listing-images > div",
    ".viewmore",
    ".reviews-track > div",
    ".contact-section ul",
    ".contact-section form",
    ".contact-section p",
    ".block",
    ".team-grid > div",
    ".why-us",
    ".about-cta",
    ".listing-card",
    ".listing-footer",
    ".filters",
  ];

  const revealTargets = document.querySelectorAll(revealSelectors.join(", "));

  revealTargets.forEach((el, index) => {
    el.classList.add("reveal-on-scroll");
    el.style.setProperty("--reveal-delay", `${Math.min(index * 60, 320)}ms`);
  });

  if (reducedMotion) {
    revealTargets.forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  revealTargets.forEach((el) => observer.observe(el));
}

setupScrollReveal();
