/* ═══════════════════════════════════════════
   PETER EMAD — PORTFOLIO JS
   ═══════════════════════════════════════════ */

/* ── Cursor Glow ── */
const cursorGlow = document.getElementById("cursorGlow");
document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

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

/* ── Typewriter ── */
const phrases = [
  "React Developer",
];
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
  let speed = deleting ? 45 : 85;
  if (!deleting && cIdx === word.length + 1) {
    deleting = true;
    speed = 1800;
  } else if (deleting && cIdx < 0) {
    deleting = false;
    pIdx = (pIdx + 1) % phrases.length;
    speed = 400;
  }
  setTimeout(type, speed);
}
type();

/* ── Navbar: scroll shadow + active link ── */
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);

  // Active link
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach((l) => {
    l.classList.toggle("active", l.getAttribute("href") === "#" + current);
  });

  // Scroll-to-top
  scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
});

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

/* ── AOS Scroll Reveal ── */
const aosEls = document.querySelectorAll("[data-aos]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = parseInt(
          entry.target.getAttribute("data-aos-delay") || "0",
        );
        setTimeout(() => entry.target.classList.add("aos-animate"), delay);
      }
    });
  },
  { threshold: 0.12 },
);
aosEls.forEach((el) => observer.observe(el));

/* ── Contact Form ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector(".form-submit");
  const success = document.getElementById("formSuccess");
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
  setTimeout(() => {
    btn.innerHTML =
      '<span>Send Message</span><i class="fa-solid fa-paper-plane"></i>';
    success.classList.add("show");
    e.target.reset();
    setTimeout(() => success.classList.remove("show"), 4000);
  }, 1200);
}

/* ── Skill cards: stagger on hover ── */
document.querySelectorAll(".skill-card").forEach((card, i) => {
  card.style.transitionDelay = i * 20 + "ms";
});

/* ── Smooth section transitions ── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
