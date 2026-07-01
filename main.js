(function () {
  "use strict";

  /* ══════════════════════════════════════════════
     LOADING SCREEN
  ══════════════════════════════════════════════ */
  const loadingScreen = document.getElementById("loadingScreen");
  const pctEl = document.getElementById("loadingPct");
  let loadPct = 0;
  const pctInterval = setInterval(() => {
    loadPct += Math.random() * 18 + 5;
    if (loadPct >= 100) {
      loadPct = 100;
      clearInterval(pctInterval);
      setTimeout(() => loadingScreen?.classList.add("hide"), 150);
    }
    if (pctEl) pctEl.textContent = Math.floor(loadPct) + "%";
  }, 110);

  /* ══════════════════════════════════════════════
     THEME (dark / light)
  ══════════════════════════════════════════════ */
  const html = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  let isDark = localStorage.getItem("theme") !== "light";

  function applyTheme(dark) {
    html.setAttribute("data-theme", dark ? "dark" : "light");
    if (themeIcon)
      themeIcon.className = dark ? "fa-solid fa-moon" : "fa-solid fa-sun";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }
  applyTheme(isDark);
  themeBtn?.addEventListener("click", () => {
    isDark = !isDark;
    applyTheme(isDark);
  });

  /* ══════════════════════════════════════════════
     LANGUAGE — Full Arabic support
  ══════════════════════════════════════════════ */
  const langBtn = document.getElementById("langToggle");
  const langLabel = langBtn?.querySelector(".toggle-label");
  let isAr = false;

  function applyLang(ar) {
    html.setAttribute("lang", ar ? "ar" : "en");
    html.setAttribute("dir", ar ? "rtl" : "ltr");
    if (langLabel) langLabel.textContent = ar ? "EN" : "AR";

    // Translate all [data-en] / [data-ar] elements
    document.querySelectorAll("[data-en]").forEach((el) => {
      const val = ar ? el.getAttribute("data-ar") : el.getAttribute("data-en");
      if (!val) return;
      if (el.children.length === 0) {
        el.textContent = val;
      } else if (
        ["SPAN", "P", "H2", "H3", "H4", "DIV", "A"].includes(el.tagName)
      ) {
        el.innerHTML = val;
      }
    });

    // Navbar logo
    const navLogo = document.querySelector(".nav-logo");
    if (navLogo) {
      navLogo.innerHTML = ar
        ? `<span class="logo-dot"></span><span class="logo-text">بورت<span class="logo-port">فوليو</span></span>`
        : `<span class="logo-dot"></span><span class="logo-text">port<span class="logo-port">folio</span></span>`;
    }

    // Footer logo
    const footerLogo = document.querySelector(".footer-logo");
    if (footerLogo) {
      footerLogo.innerHTML = ar
        ? `<span class="logo-dot"></span><span>بورتفوليو</span>`
        : `<span class="logo-dot"></span><span>portfolio</span>`;
    }

    // Form placeholders
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const subjectInput = document.getElementById("subjectInput");
    const msgInput = document.getElementById("msgInput");
    if (nameInput) nameInput.placeholder = ar ? "مثال: أحمد" : "Ex. Ahmed";
    if (emailInput)
      emailInput.placeholder = ar
        ? "مثال: ahmed@gmail.com"
        : "Ex. ahmed@gmail.com";
    if (subjectInput)
      subjectInput.placeholder = ar ? "استفسار عن مشروع" : "Project Inquiry";
    if (msgInput)
      msgInput.placeholder = ar
        ? "أخبرني عن مشروعك..."
        : "Tell me about your project...";

    // Terminal / CMD inputs
    const termInput = document.getElementById("termInput");
    if (termInput)
      termInput.placeholder = ar ? "اكتب أمراً..." : "Type a command...";
    const cmdInputEl = document.getElementById("cmdInput");
    if (cmdInputEl)
      cmdInputEl.placeholder = ar
        ? "ابحث في الأوامر..."
        : "Search commands, navigate...";

    updateTypewriterLang(ar);
    if (window._cmdOpen) renderCmdItems("");
  }

  langBtn?.addEventListener("click", () => {
    isAr = !isAr;
    applyLang(isAr);
  });

  /* ══════════════════════════════════════════════
     TYPEWRITER — Smooth natural effect
  ══════════════════════════════════════════════ */
  const phrasesEN = ["React Developer", " Developer"];
  const phrasesAR = [" رياكت", " فرونت إند"];
  let twPhrases = [...phrasesEN];
  let twIdx = 0,
    twChar = 0,
    twDeleting = false;
  const twEl = document.getElementById("typewriter");
  const twCursor = document.getElementById("twCursor");

  // Cursor blink
  let cursorVisible = true;
  setInterval(() => {
    cursorVisible = !cursorVisible;
    twCursor?.classList.toggle("off", !cursorVisible);
  }, 530);

  function typeStep() {
    if (!twEl) return;
    const word = twPhrases[twIdx];
    twDeleting ? twChar-- : twChar++;
    twEl.textContent = word.substring(0, twChar);

    let delay = twDeleting
      ? 38 + Math.random() * 20
      : 95 + Math.random() * 40 - 20;
    if (!twDeleting && twChar === word.length) {
      delay = 2000;
      twDeleting = true;
    } else if (twDeleting && twChar === 0) {
      twDeleting = false;
      twIdx = (twIdx + 1) % twPhrases.length;
      delay = 380;
    }
    setTimeout(typeStep, Math.max(20, delay));
  }
  setTimeout(typeStep, 800);

  function updateTypewriterLang(ar) {
    twPhrases = ar ? [...phrasesAR] : [...phrasesEN];
  }
  window.updateTypewriterLang = updateTypewriterLang;

  /* ══════════════════════════════════════════════
     CUSTOM CURSOR
  ══════════════════════════════════════════════ */
  const cursorDot = document.getElementById("cursorDot");
  const cursorRing = document.getElementById("cursorRing");
  let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;

  document.addEventListener(
    "mousemove",
    (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorDot) {
        cursorDot.style.left = mx + "px";
        cursorDot.style.top = my + "px";
      }
    },
    { passive: true },
  );

  let ringRafId = null;
  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    if (cursorRing) {
      cursorRing.style.left = rx + "px";
      cursorRing.style.top = ry + "px";
    }
    // Keep animating only while ring hasn't settled
    const driftSq = (mx - rx) ** 2 + (my - ry) ** 2;
    if (driftSq > 0.1) ringRafId = requestAnimationFrame(animRing);
    else ringRafId = null;
  }
  document.addEventListener(
    "mousemove",
    () => {
      if (!ringRafId) ringRafId = requestAnimationFrame(animRing);
    },
    { passive: true },
  );

  document.addEventListener("mousedown", () => {
    cursorDot?.classList.add("clicking");
    cursorRing?.classList.add("clicking");
  });
  document.addEventListener("mouseup", () => {
    cursorDot?.classList.remove("clicking");
    cursorRing?.classList.remove("clicking");
  });

  document
    .querySelectorAll("a,button,.btn,.skill-card,.project-card,.service-card")
    .forEach((el) => {
      el.addEventListener("mouseenter", () =>
        cursorRing?.classList.add("hovering"),
      );
      el.addEventListener("mouseleave", () =>
        cursorRing?.classList.remove("hovering"),
      );
    });

  /* ══════════════════════════════════════════════
     SCROLL PROGRESS & NAVBAR & SCROLL TOP
  ══════════════════════════════════════════════ */
  const progressBar = document.getElementById("scrollProgress");
  const navbar = document.getElementById("navbar");
  const scrollTopBtn = document.getElementById("scrollTop");
  const navLinkEls = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id],header[id]");

  window.addEventListener(
    "scroll",
    () => {
      const pct =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      if (progressBar) progressBar.style.width = pct + "%";
      navbar?.classList.toggle("scrolled", window.scrollY > 20);
      scrollTopBtn?.classList.toggle("visible", window.scrollY > 400);
      let cur = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 130) cur = s.id;
      });
      navLinkEls.forEach((l) =>
        l.classList.toggle("active", l.getAttribute("href") === "#" + cur),
      );
    },
    { passive: true },
  );

  scrollTopBtn?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  /* ══════════════════════════════════════════════
     MOBILE MENU
  ══════════════════════════════════════════════ */
  const hamburger = document.getElementById("hamburger");
  const navLinksEl = document.getElementById("navLinks");

  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinksEl?.classList.toggle("open");
  });
  navLinkEls.forEach((l) =>
    l.addEventListener("click", () => {
      hamburger?.classList.remove("open");
      navLinksEl?.classList.remove("open");
    }),
  );

  /* ══════════════════════════════════════════════
     REVEAL ON SCROLL
  ══════════════════════════════════════════════ */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = parseInt(el.style.getPropertyValue("--d") || "0");
        setTimeout(() => el.classList.add("revealed"), delay);
        revealObserver.unobserve(el);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  document
    .querySelectorAll("[data-reveal]")
    .forEach((el) => revealObserver.observe(el));

  /* ══════════════════════════════════════════════
     SMOOTH ANCHOR SCROLL
  ══════════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", function (e) {
      const t = document.querySelector(this.getAttribute("href"));
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ══════════════════════════════════════════════
     CONTACT FORM
  ══════════════════════════════════════════════ */
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector(".form-submit");
    const success = document.getElementById("formSuccess");
    if (btn) btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    setTimeout(() => {
      if (btn)
        btn.innerHTML = `<span>${isAr ? "إرسال الرسالة" : "Send Message"}</span><i class="fa-solid fa-paper-plane"></i>`;
      success?.classList.add("show");
      e.target.reset();
      setTimeout(() => success?.classList.remove("show"), 4000);
    }, 1200);
  }
  window.handleSubmit = handleSubmit;

  // Availability badge → scroll to contact
  document.getElementById("availBadge")?.addEventListener("click", () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  });

  /* ══════════════════════════════════════════════
     BTN RIPPLE
  ══════════════════════════════════════════════ */
  document.querySelectorAll(".btn-ripple").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left,
        y = e.clientY - rect.top;
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      const size = btn.offsetWidth * 2;
      ripple.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;margin-left:-${btn.offsetWidth}px;margin-top:-${btn.offsetWidth}px`;
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });

  /* ══════════════════════════════════════════════
     3D TILT ON PROJECT CARDS
  ══════════════════════════════════════════════ */
  document.querySelectorAll(".project-card").forEach((card) => {
    card.style.willChange = "transform"; // prevent repaint on hover
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const rotX = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -6;
      const rotY = ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  /* ══════════════════════════════════════════════
     MAGNETIC SOCIAL ICONS
  ══════════════════════════════════════════════ */
  document.querySelectorAll(".social-icon").forEach((icon) => {
    icon.addEventListener("mousemove", (e) => {
      const r = icon.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      icon.style.transform = `translate(${x * 0.3}px,${y * 0.3}px) translateY(-5px)`;
    });
    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "";
    });
  });

  /* ══════════════════════════════════════════════
     PARTICLE CANVAS
  ══════════════════════════════════════════════ */
  const canvas = document.getElementById("particleCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let pmx = W / 2,
      pmy = H / 2;

    class P {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.r = Math.random() * 1.8 + 0.4;
        this.a = Math.random() * 0.4 + 0.08;
      }
      update() {
        const dx = pmx - this.x,
          dy = pmy - this.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 200 * 200 && distSq > 0) {
          const inv = 0.01 / Math.sqrt(distSq);
          this.vx += dx * inv;
          this.vy += dy * inv;
        }
        this.vx *= 0.98;
        this.vy *= 0.98;
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = W;
        if (this.x > W) this.x = 0;
        if (this.y < 0) this.y = H;
        if (this.y > H) this.y = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79,116,255,${this.a})`;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 35 }, () => new P()); // was 55

    const CONN_SQ = 120 * 120; // squared distance — no sqrt needed
    function connect() {
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length - 1; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dSq = dx * dx + dy * dy;
          if (dSq < CONN_SQ) {
            const alpha = (1 - dSq / CONN_SQ) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79,116,255,${alpha.toFixed(3)})`;
            ctx.stroke();
          }
        }
      }
    }

    (function animP() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connect();
      requestAnimationFrame(animP);
    })();

    document.addEventListener(
      "mousemove",
      (e) => {
        pmx = e.clientX;
        pmy = e.clientY;
      },
      { passive: true },
    );
    window.addEventListener(
      "resize",
      () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
      },
      { passive: true },
    );
  }

  /* ══════════════════════════════════════════════
     TERMINAL
  ══════════════════════════════════════════════ */
  const termBody = document.getElementById("termBody");
  const termInput = document.getElementById("termInput");
  let cmdHistory = [],
    histIdx = -1;

  function getCommands() {
    const ar = isAr;
    return {
      help: () =>
        ar
          ? [
              { type: "info", text: "الأوامر المتاحة:" },
              { type: "accent", text: "  about      — من هو بيتر عماد؟" },
              { type: "accent", text: "  skills     — عرض المهارات التقنية" },
              { type: "accent", text: "  projects   — عرض جميع المشاريع" },
              { type: "accent", text: "  contact    — بيانات التواصل" },
              { type: "accent", text: "  hire       — لماذا توظفني؟" },
              {
                type: "accent",
                text: "  social     — روابط التواصل الاجتماعي",
              },
              { type: "accent", text: "  theme      — تبديل الثيم" },
              { type: "accent", text: "  clear      — مسح التيرمنال" },
            ]
          : [
              { type: "info", text: "Available commands:" },
              { type: "accent", text: "  about      — Who is Peter Emad?" },
              { type: "accent", text: "  skills     — List technical skills" },
              { type: "accent", text: "  projects   — Show all projects" },
              { type: "accent", text: "  contact    — Get contact info" },
              { type: "accent", text: "  hire       — Why hire me?" },
              { type: "accent", text: "  social     — Social links" },
              { type: "accent", text: "  theme      — Toggle dark/light mode" },
              { type: "accent", text: "  clear      — Clear terminal" },
              { type: "info", text: "Tip: Press ↑↓ for command history" },
            ],

      about: () =>
        ar
          ? [
              { type: "success", text: "بيتر عماد — مطور واجهات أمامية" },
              { type: "output", text: "📍 مقيم في مصر" },
              { type: "output", text: "🎓 أكثر من سنة خبرة فعلية" },
              {
                type: "output",
                text: "⚡ متخصص في React.js والفرونت إند الحديث",
              },
              { type: "output", text: "🎯 15+ مشروع مُسلَّم باحترافية" },
              { type: "output", text: "💬 عربي + إنجليزي" },
            ]
          : [
              { type: "success", text: "Peter Emad — Frontend Developer" },
              { type: "output", text: "📍 Based in Egypt" },
              { type: "output", text: "🎓 1+ year hands-on experience" },
              {
                type: "output",
                text: "⚡ React.js & modern frontend specialist",
              },
              { type: "output", text: "🎯 15+ projects delivered" },
              { type: "output", text: "💬 Bilingual: Arabic + English" },
            ],

      skills: () =>
        ar
          ? [
              { type: "info", text: "[ المهارات الأساسية ]" },
              { type: "success", text: "  ✔ HTML5  ✔ CSS3  ✔ JavaScript ES6+" },
              {
                type: "success",
                text: "  ✔ React.js  ✔ Next.js  ✔ TypeScript",
              },
              { type: "info", text: "[ الأدوات ]" },
              {
                type: "accent",
                text: "  Git / GitHub  •  Tailwind CSS  •  Bootstrap",
              },
            ]
          : [
              { type: "info", text: "[ Core Stack ]" },
              { type: "success", text: "  ✔ HTML5  ✔ CSS3  ✔ JavaScript ES6+" },
              {
                type: "success",
                text: "  ✔ React.js  ✔ Next.js  ✔ TypeScript",
              },
              { type: "info", text: "[ Tools ]" },
              {
                type: "accent",
                text: "  Git / GitHub  •  Tailwind CSS  •  Bootstrap",
              },
            ],

      projects: () =>
        ar
          ? [
              { type: "info", text: "[ المشاريع المميزة ]" },
              {
                type: "link",
                text: "  🏋 إنجيج جيم  → modern-gym-eight.vercel.app",
              },
              {
                type: "link",
                text: "  ⚽ فيفا        → fifa-world-cup-ashen.vercel.app",
              },
              {
                type: "link",
                text: "  🏥 ميد كير    → made-care-lake.vercel.app",
              },
              { type: "link", text: "  ⛪ الألحان    → mot5ss.vercel.app" },
              {
                type: "link",
                text: "  🍣 كينجدم     → kingdom2026.netlify.app",
              },
              { type: "link", text: "  ☕ كافيين     → spreso.netlify.app" },
            ]
          : [
              { type: "info", text: "[ Featured Projects ]" },
              {
                type: "link",
                text: "  🏋 ENGAGE GYM → modern-gym-eight.vercel.app",
              },
              {
                type: "link",
                text: "  ⚽ FIFA HUB   → fifa-world-cup-ashen.vercel.app",
              },
              {
                type: "link",
                text: "  🏥 MADE CARE  → made-care-lake.vercel.app",
              },
              { type: "link", text: "  ⛪ COPTIC     → mot5ss.vercel.app" },
              {
                type: "link",
                text: "  🍣 KINGDOM    → kingdom2026.netlify.app",
              },
              { type: "link", text: "  ☕ CAFFEINE   → spreso.netlify.app" },
            ],

      contact: () =>
        ar
          ? [
              { type: "success", text: "لنبني شيئاً رائعاً معاً!" },
              { type: "output", text: "📧 Peteremad438@gmail.com" },
              { type: "output", text: "📱 +20 121 271 3718" },
              { type: "output", text: "💬 واتساب: wa.me/201212713718" },
              { type: "output", text: "🟢 متاح للعمل الحر" },
            ]
          : [
              { type: "success", text: "Let's build something great!" },
              { type: "output", text: "📧 Peteremad438@gmail.com" },
              { type: "output", text: "📱 +20 121 271 3718" },
              { type: "output", text: "💬 WhatsApp: wa.me/201212713718" },
              { type: "output", text: "🟢 Available for freelance" },
            ],

      hire: () =>
        ar
          ? [
              { type: "success", text: "لماذا توظف بيتر؟" },
              { type: "accent", text: "  01. كود نظيف وسهل القراءة" },
              { type: "accent", text: "  02. عين حادة على تفاصيل التصميم" },
              { type: "accent", text: "  03. تسليم سريع يحترم المواعيد" },
              { type: "accent", text: "  04. تواصل ثنائي اللغة" },
              { type: "accent", text: "  05. يتعلم باستمرار تقنيات جديدة" },
              { type: "success", text: "  → اكتب 'contact' للتواصل الآن!" },
            ]
          : [
              { type: "success", text: "Why hire Peter?" },
              {
                type: "accent",
                text: "  01. Clean, readable, well-commented code",
              },
              { type: "accent", text: "  02. Pixel-perfect design attention" },
              { type: "accent", text: "  03. Fast — respects deadlines" },
              { type: "accent", text: "  04. Bilingual communication" },
              { type: "accent", text: "  05. Always learning new tech" },
              { type: "success", text: "  → Run 'contact' to reach out!" },
            ],

      social: () => [
        {
          type: "link",
          text: "  🐙 GitHub:    https://github.com/peteremad438-ux",
        },
        {
          type: "link",
          text: "  💼 LinkedIn:  https://www.linkedin.com/in/peter-emad-057505361/",
        },
        {
          type: "link",
          text: "  📸 Instagram: https://www.instagram.com/pepoo__emad",
        },
        {
          type: "link",
          text: "  📘 Facebook:  https://www.facebook.com/share/1ChHSu1Bxj/",
        },
      ],

      theme: () => {
        document.getElementById("themeToggle")?.click();
        return [
          {
            type: "success",
            text: isAr ? "تم تغيير الثيم! 🎨" : "Theme toggled! 🎨",
          },
        ];
      },

      clear: () => {
        if (termBody) termBody.innerHTML = "";
        return [];
      },

      matrix: () => {
        triggerMatrixEgg();
        return [{ type: "success", text: isAr ? "تشغيل..." : "Initiating..." }];
      },

      secret: () =>
        ar
          ? [
              { type: "error", text: "🕹️ تلميح كنز مخفي:" },
              { type: "accent", text: "  جرب كود كوناميـ: ↑↑↓↓←→←→BA" },
            ]
          : [
              { type: "error", text: "🕹️ Easter egg hint:" },
              { type: "accent", text: "  Try the Konami Code: ↑↑↓↓←→←→BA" },
            ],
    };
  }

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function addTermLine(html) {
    if (!termBody) return;
    const div = document.createElement("div");
    div.innerHTML = html;
    termBody.appendChild(div);
    termBody.scrollTop = termBody.scrollHeight;
  }

  function processCmd(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    cmdHistory.unshift(cmd);
    histIdx = -1;
    addTermLine(
      `<div class="terminal-line"><span class="t-prompt">peter@portfolio:~$</span><span class="t-cmd"> ${esc(raw)}</span></div>`,
    );

    const fn = getCommands()[cmd];
    if (fn) {
      fn().forEach((line) => {
        const el = document.createElement("div");
        el.className =
          line.type === "link" ? "t-output link" : `t-output ${line.type}`;
        el.textContent = line.text;
        if (line.type === "link") {
          const url = line.text.split("→ ")[1]?.trim().replace("https://", "");
          if (url)
            el.addEventListener("click", () =>
              window.open("https://" + url, "_blank"),
            );
        }
        termBody?.appendChild(el);
      });
    } else {
      addTermLine(
        `<div class="t-output error">${isAr ? "أمر غير معروف: '" : "Command not found: '"}${esc(cmd)}${isAr ? "'. اكتب 'help'." : "'. Type 'help'."}</div>`,
      );
    }
    if (termBody) termBody.scrollTop = termBody.scrollHeight;
  }

  termInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      processCmd(termInput.value);
      termInput.value = "";
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      histIdx = Math.min(histIdx + 1, cmdHistory.length - 1);
      termInput.value = cmdHistory[histIdx] || "";
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      histIdx = Math.max(histIdx - 1, -1);
      termInput.value = histIdx === -1 ? "" : cmdHistory[histIdx];
    }
  });

  document.querySelectorAll(".t-suggest").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (termInput) termInput.value = btn.getAttribute("data-cmd");
      termInput?.focus();
    });
  });

  // Boot message
  setTimeout(() => {
    if (!termBody) return;
    addTermLine(
      `<div class="t-output success">Portfolio OS v3.0 — Peter Emad's Interactive Shell</div>`,
    );
    addTermLine(
      `<div class="t-output info">Type 'help' to see available commands.</div>`,
    );
    addTermLine(`<div class="t-output output">Ready. ✨</div>`);
  }, 400);

  /* ══════════════════════════════════════════════
     COMMAND PALETTE  ← FIXED
  ══════════════════════════════════════════════ */
  const cmdBackdrop = document.getElementById("cmdBackdrop");
  const cmdInput = document.getElementById("cmdInput");
  let cmdActiveIdx = 0;

  function getCmdItems() {
    const ar = isAr;
    return [
      {
        group: ar ? "تنقل" : "Navigate",
        icon: "fa-house",
        label: ar ? "الرئيسية" : "Home",
        sub: ar ? "اذهب للأعلى" : "Scroll to top",
        action: () => scrollToSection("#home"),
      },
      {
        group: ar ? "تنقل" : "Navigate",
        icon: "fa-user",
        label: ar ? "عني" : "About",
        sub: ar ? "نبذة عن بيتر" : "About Peter",
        action: () => scrollToSection("#about"),
      },
      {
        group: ar ? "تنقل" : "Navigate",
        icon: "fa-bolt",
        label: ar ? "مهاراتي" : "Skills",
        sub: ar ? "التقنيات" : "Tech stack",
        action: () => scrollToSection("#skills"),
      },
      {
        group: ar ? "تنقل" : "Navigate",
        icon: "fa-folder",
        label: ar ? "مشاريعي" : "Projects",
        sub: ar ? "أعمالي" : "Portfolio",
        action: () => scrollToSection("#projects"),
      },
      {
        group: ar ? "تنقل" : "Navigate",
        icon: "fa-briefcase",
        label: ar ? "خدماتي" : "Services",
        sub: ar ? "ما أقدمه" : "What I offer",
        action: () => scrollToSection("#srvices"),
      },
      {
        group: ar ? "تنقل" : "Navigate",
        icon: "fa-envelope",
        label: ar ? "تواصل" : "Contact",
        sub: ar ? "تواصل معي" : "Get in touch",
        action: () => scrollToSection("#contact"),
      },
      {
        group: ar ? "إجراءات" : "Actions",
        icon: "fa-terminal",
        label: ar ? "الطرفية" : "Open Terminal",
        sub: ar ? "واجهة سطر الأوامر" : "Interactive CLI",
        action: () => scrollToSection("#terminal"),
      },
      {
        group: ar ? "إجراءات" : "Actions",
        icon: "fa-palette",
        label: ar ? "تخصيص الثيم" : "Customize Theme",
        sub: ar ? "غير لون التمييز" : "Change accent color",
        action: () => {
          closeCmdPalette();
          document.getElementById("themePanel")?.classList.add("open");
        },
      },
      {
        group: ar ? "إجراءات" : "Actions",
        icon: "fa-download",
        label: ar ? "تحميل السيرة" : "Download CV",
        sub: ar ? "احصل على سيرتي" : "Get my resume",
        action: () => {},
      },
      {
        group: ar ? "إجراءات" : "Actions",
        icon: "fa-moon",
        label: ar ? "تبديل الثيم" : "Toggle Dark/Light",
        sub: ar ? "تغيير المظهر" : "Switch theme",
        action: () => {
          closeCmdPalette();
          document.getElementById("themeToggle")?.click();
        },
      },
      {
        group: ar ? "التواصل" : "Social",
        icon: "fa-brands fa-github",
        label: "GitHub",
        sub: "github.com/peteremad438-ux",
        action: () =>
          window.open("https://github.com/peteremad438-ux", "_blank"),
      },
      {
        group: ar ? "التواصل" : "Social",
        icon: "fa-brands fa-linkedin-in",
        label: "LinkedIn",
        sub: ar ? "تواصل على لينكد إن" : "Connect on LinkedIn",
        action: () =>
          window.open(
            "https://www.linkedin.com/in/peter-emad-057505361",
            "_blank",
          ),
      },
      {
        group: ar ? "التواصل" : "Social",
        icon: "fa-brands fa-whatsapp",
        label: "WhatsApp",
        sub: "+20 121 271 3718",
        action: () => window.open("https://wa.me/201212713718", "_blank"),
      },
    ];
  }

  function scrollToSection(id) {
    closeCmdPalette();
    document
      .querySelector(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openCmdPalette() {
    cmdBackdrop?.classList.add("open");
    cmdInput?.focus();
    window._cmdOpen = true;
    renderCmdItems("");
  }
  function closeCmdPalette() {
    cmdBackdrop?.classList.remove("open");
    if (cmdInput) cmdInput.value = "";
    window._cmdOpen = false;
  }

  // ── Attach ALL cmd-trigger buttons ──
  function attachCmdTriggers() {
    document
      .getElementById("cmdTrigger")
      ?.addEventListener("click", openCmdPalette);
    document
      .getElementById("cmdTriggerMobile")
      ?.addEventListener("click", openCmdPalette);
  }
  attachCmdTriggers();

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      cmdBackdrop?.classList.contains("open")
        ? closeCmdPalette()
        : openCmdPalette();
    }
    if (e.key === "Escape") {
      closeCmdPalette();
      window.closeCaseStudy?.();
    }
    if (
      (e.key === "~" || e.key === "`") &&
      document.activeElement?.tagName !== "INPUT" &&
      document.activeElement?.tagName !== "TEXTAREA"
    )
      scrollToSection("#terminal");
  });

  cmdBackdrop?.addEventListener("click", (e) => {
    if (e.target === cmdBackdrop) closeCmdPalette();
  });

  cmdInput?.addEventListener("input", (e) => {
    renderCmdItems(e.target.value.toLowerCase());
    cmdActiveIdx = 0;
  });
  cmdInput?.addEventListener("keydown", (e) => {
    const items = document.querySelectorAll(".cmd-item");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      cmdActiveIdx = Math.min(cmdActiveIdx + 1, items.length - 1);
      updateCmdActive(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      cmdActiveIdx = Math.max(cmdActiveIdx - 1, 0);
      updateCmdActive(items);
    } else if (e.key === "Enter") {
      document.querySelector(".cmd-item.active")?.click();
    }
  });

  function updateCmdActive(items) {
    items.forEach((el, i) => el.classList.toggle("active", i === cmdActiveIdx));
    items[cmdActiveIdx]?.scrollIntoView({ block: "nearest" });
  }

  function renderCmdItems(query) {
    const container = document.getElementById("cmdResults");
    if (!container) return;
    const filtered = getCmdItems().filter(
      (i) =>
        i.label.toLowerCase().includes(query) ||
        i.sub.toLowerCase().includes(query),
    );
    const groups = {};
    filtered.forEach((item) => {
      if (!groups[item.group]) groups[item.group] = [];
      groups[item.group].push(item);
    });

    container.innerHTML = Object.entries(groups)
      .map(
        ([group, items]) =>
          `<div class="cmd-group-label">${group}</div>` +
          items
            .map(
              (item, i) =>
                `<div class="cmd-item${i === 0 && group === Object.keys(groups)[0] ? " active" : ""}" data-label="${item.label}">
          <div class="cmd-item-icon"><i class="fa-solid ${item.icon}"></i></div>
          <span class="cmd-item-label">${item.label}</span>
          <span class="cmd-item-sub">${item.sub}</span>
        </div>`,
            )
            .join(""),
      )
      .join("");

    container.querySelectorAll(".cmd-item").forEach((el) => {
      el.addEventListener("click", () => {
        const found = getCmdItems().find((i) => i.label === el.dataset.label);
        if (found) found.action();
      });
    });
  }
  window.renderCmdItems = renderCmdItems;

  /* ══════════════════════════════════════════════
     THEME CUSTOMIZER
  ══════════════════════════════════════════════ */
  const ACCENTS = {
    blue: {
      "--accent": "#4f74ff",
      "--accent-glow": "rgba(79,116,255,0.28)",
      "--accent-soft": "rgba(79,116,255,0.1)",
      "--accent-mid": "rgba(79,116,255,0.18)",
    },
    purple: {
      "--accent": "#8b5cf6",
      "--accent-glow": "rgba(139,92,246,0.28)",
      "--accent-soft": "rgba(139,92,246,0.1)",
      "--accent-mid": "rgba(139,92,246,0.18)",
    },
    cyan: {
      "--accent": "#06b6d4",
      "--accent-glow": "rgba(6,182,212,0.28)",
      "--accent-soft": "rgba(6,182,212,0.1)",
      "--accent-mid": "rgba(6,182,212,0.18)",
    },
    green: {
      "--accent": "#10b981",
      "--accent-glow": "rgba(16,185,129,0.28)",
      "--accent-soft": "rgba(16,185,129,0.1)",
      "--accent-mid": "rgba(16,185,129,0.18)",
    },
    rose: {
      "--accent": "#f43f5e",
      "--accent-glow": "rgba(244,63,94,0.28)",
      "--accent-soft": "rgba(244,63,94,0.1)",
      "--accent-mid": "rgba(244,63,94,0.18)",
    },
  };

  function applyAccent(name) {
    const vars = ACCENTS[name];
    if (!vars) return;
    Object.entries(vars).forEach(([k, v]) =>
      document.documentElement.style.setProperty(k, v),
    );
    localStorage.setItem("accent", name);
    document
      .querySelectorAll(".color-swatch")
      .forEach((sw) =>
        sw.classList.toggle("active", sw.dataset.accent === name),
      );
  }

  document
    .querySelectorAll(".color-swatch")
    .forEach((sw) =>
      sw.addEventListener("click", () => applyAccent(sw.dataset.accent)),
    );
  const savedAccent = localStorage.getItem("accent");
  if (savedAccent) applyAccent(savedAccent);

  document
    .getElementById("themePanelToggle")
    ?.addEventListener("click", () =>
      document.getElementById("themePanel")?.classList.toggle("open"),
    );

  /* ══════════════════════════════════════════════
     CASE STUDY MODAL
  ══════════════════════════════════════════════ */
  const caseBackdrop = document.getElementById("caseModalBackdrop");
  const caseModal = document.getElementById("caseModal");

  function openCaseStudy(key) {
    const data = getCaseStudies()[key];
    if (!data || !caseModal) return;
    const ar = isAr;
    caseModal.innerHTML = `
      <div class="case-modal-hero">
        <img src="${data.img}" alt="${data.title}" loading="lazy"/>
        <div class="case-modal-hero-overlay"></div>
        <button class="case-close" onclick="closeCaseStudy()"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="case-modal-body">
        <span class="case-modal-tag">${data.tag}</span>
        <h2 class="case-modal-title">${data.title}</h2>
        <div class="case-stat-row">${data.stats.map((s) => `<div class="case-stat"><span class="case-stat-value">${s.value}</span><span class="case-stat-label">${s.label}</span></div>`).join("")}</div>
        <h3 class="case-section-title">${ar ? "التحدي" : "The Challenge"}</h3><p class="case-desc">${data.challenge}</p>
        <h3 class="case-section-title">${ar ? "الحل" : "The Solution"}</h3><p class="case-desc">${data.solution}</p>
        <h3 class="case-section-title">${ar ? "النتيجة" : "The Outcome"}</h3><p class="case-desc">${data.outcome}</p>
        <div class="case-tags">${data.tags.map((t) => `<span style="font-size:.7rem;font-weight:600;padding:4px 12px;border-radius:50px;background:var(--accent-soft);color:var(--accent);border:1px solid var(--accent-mid)">${t}</span>`).join("")}</div>
        <div class="case-modal-links">
          <a href="${data.demo}" target="_blank" class="btn btn-primary"><i class="fa-solid fa-eye"></i> ${ar ? "عرض مباشر" : "Live Demo"}</a>
          <a href="${data.github}" target="_blank" class="btn btn-outline"><i class="fa-brands fa-github"></i> GitHub</a>
        </div>
      </div>`;
    caseBackdrop?.classList.add("open");
  }
  window.openCaseStudy = openCaseStudy;
  window.closeCaseStudy = () => caseBackdrop?.classList.remove("open");
  caseBackdrop?.addEventListener("click", (e) => {
    if (e.target === caseBackdrop) window.closeCaseStudy();
  });

  function getCaseStudies() {
    return {};
  } // extend as needed

  /* ══════════════════════════════════════════════
     KONAMI EASTER EGG
  ══════════════════════════════════════════════ */
  const KONAMI = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  let konamiIdx = 0;
  document.addEventListener("keydown", (e) => {
    if (e.key === KONAMI[konamiIdx]) {
      konamiIdx++;
      if (konamiIdx === KONAMI.length) {
        konamiIdx = 0;
        triggerMatrixEgg();
      }
    } else konamiIdx = 0;
  });

  function triggerMatrixEgg() {
    const overlay = document.getElementById("konamiOverlay");
    const rain = document.getElementById("matrixRain");
    if (!overlay) return;
    overlay.classList.add("show");
    if (rain) {
      rain.innerHTML = "";
      const c2 = document.createElement("canvas");
      rain.appendChild(c2);
      const cx2 = c2.getContext("2d");
      c2.width = window.innerWidth;
      c2.height = window.innerHeight;
      const cols = Math.floor(c2.width / 20);
      const drops = Array(cols).fill(1);
      const chars = "アイウエオカキクケコ01PETER";
      function drawMatrix() {
        cx2.fillStyle = "rgba(0,0,0,0.05)";
        cx2.fillRect(0, 0, c2.width, c2.height);
        cx2.fillStyle = "#0f0";
        cx2.font = "16px monospace";
        drops.forEach((y, x) => {
          cx2.fillText(
            chars[Math.floor(Math.random() * chars.length)],
            x * 20,
            y * 20,
          );
          if (y * 20 > c2.height && Math.random() > 0.975) drops[x] = 0;
          drops[x]++;
        });
      }
      const mInterval = setInterval(drawMatrix, 50);
      document.getElementById("konamiClose")?.addEventListener(
        "click",
        () => {
          overlay.classList.remove("show");
          clearInterval(mInterval);
          rain.innerHTML = "";
        },
        { once: true },
      );
    }
  }
  window.triggerMatrixEgg = triggerMatrixEgg;
})();