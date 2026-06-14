/* ═══════════════════════════════════════════
   PETER EMAD — PORTFOLIO JS
   ═══════════════════════════════════════════ */

/* -- Cursor Glow -- */
const cursorGlow = document.getElementById("cursorGlow");
let mouseX = 0,
  mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorGlow.style.left = mouseX + "px";
  cursorGlow.style.top = mouseY + "px";
});

/* Hide cursor glow on mobile */
if (window.matchMedia("(max-width: 768px)").matches) {
  cursorGlow.style.display = "none";
}

/* ── Theme Toggle ── */
const html = document.documentElement;
const themeBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
let isDark = localStorage.getItem("theme") !== "light";

function applyTheme(dark) {
  html.setAttribute("data-theme", dark ? "dark" : "light");
  themeIcon.className = dark ? "fa-solid fa-moon" : "fa-solid fa-sun";
  localStorage.setItem("theme", dark ? "dark" : "light");
}
applyTheme(isDark);
themeBtn.addEventListener("click", () => {
  isDark = !isDark;
  applyTheme(isDark);
});

/* ── Language Toggle ── */
const langBtn = document.getElementById("langToggle");
const langLabel = langBtn.querySelector(".toggle-label");
let isAr = false;

function applyLang(ar) {
  const lang = ar ? "ar" : "en";
  html.setAttribute("lang", lang);
  html.setAttribute("dir", ar ? "rtl" : "ltr");
  langLabel.textContent = ar ? "AR" : "EN";
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = ar
      ? el.getAttribute("data-ar") || el.textContent
      : el.getAttribute("data-en") || el.textContent;
  });
}
langBtn.addEventListener("click", () => {
  isAr = !isAr;
  applyLang(isAr);
});

/* -- Typewriter -- */
const phrases = ["React Developer", "Web Designer", "UI Engineer"];
let pIdx = 0,
  cIdx = 0,
  deleting = false;
const twEl = document.getElementById("typewriter");

function type() {
  if (!twEl) return;
  const word = phrases[pIdx];
  if (deleting) {
    twEl.textContent = word.substring(0, cIdx--);
  } else {
    twEl.textContent = word.substring(0, cIdx++);
  }
  let speed = deleting ? 50 : 80;
  if (!deleting && cIdx === word.length + 1) {
    deleting = true;
    speed = 2000;
  } else if (deleting && cIdx < 0) {
    deleting = false;
    pIdx = (pIdx + 1) % phrases.length;
    speed = 500;
  }
  setTimeout(type, speed);
}
type();

/* -- Navbar: scroll shadow + active link -- */
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".nav-link");
let lastScrollY = 0;
let scrollDirection = "down";

window.addEventListener(
  "scroll",
  () => {
    const currentScrollY = window.scrollY;

    // Determine scroll direction
    scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
    lastScrollY = currentScrollY;

    // Add scrolled effect
    navbar.classList.toggle("scrolled", window.scrollY > 20);

    // Active link highlighting
    let current = "";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach((l) => {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });

    // Scroll-to-top visibility
    scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
  },
  { passive: true },
);

/* ── Mobile Menu ── */
const hamburger = document.getElementById("hamburger");
const navLinksEl = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinksEl.classList.toggle("open");
});
navLinks.forEach((l) =>
  l.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinksEl.classList.remove("open");
  }),
);

/* ── Scroll to Top ── */
const scrollTopBtn = document.getElementById("scrollTop");
scrollTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);

/* -- AOS Scroll Reveal -- */
const aosEls = document.querySelectorAll("[data-aos]");
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -100px 0px",
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = parseInt(
        entry.target.getAttribute("data-aos-delay") || "0",
      );
      setTimeout(() => entry.target.classList.add("aos-animate"), delay);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
aosEls.forEach((el) => observer.observe(el));

/* -- Contact Form -- */
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = this.querySelector(".form-submit");
    const success = document.getElementById("formSuccess");
    const originalHTML = btn.innerHTML;

    btn.disabled = true;
    btn.style.opacity = "0.7";
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    setTimeout(() => {
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
      btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
      success.classList.add("show");
      this.reset();

      setTimeout(() => {
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.innerHTML = originalHTML;
        btn.style.background = "";
        success.classList.remove("show");
      }, 3000);
    }, 1500);
  });
}

/* -- Skill cards: stagger on hover -- */
document.querySelectorAll(".skill-card").forEach((card, i) => {
  card.style.transitionDelay = i * 30 + "ms";

  // Add hover pulse effect
  card.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.08)";
  });
  card.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

/* -- Smooth section transitions -- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* -- Keyboard navigation (Tab + Enter) -- */
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.tagName === "A") {
    e.target.click();
  }
});
