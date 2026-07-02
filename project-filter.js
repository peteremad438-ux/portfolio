/* ══════════════════════════════════════════════════
   PROJECT FILTER + CARD INTERACTION
   Handles: All / Freelance / Personal filtering
   with sliding indicator + fade-up card animation,
   plus whole-card click/keyboard navigation to the
   project's live demo (overlay buttons still work
   independently and stop the card-level navigation).
══════════════════════════════════════════════════ */
(function () {
  "use strict";

  const filterBtns = document.querySelectorAll(".filter-btn");
  const indicator = document.getElementById("filterIndicator");
  const projectCards = document.querySelectorAll(".project-card");

  /* ── Segmented filter control ── */
  if (filterBtns.length && indicator) {
    function moveIndicator(btn) {
      if (!indicator || !btn) return;
      indicator.style.width = btn.offsetWidth + "px";
      indicator.style.transform = `translateX(${btn.offsetLeft - 6}px)`;
    }

    function applyFilter(filter) {
      projectCards.forEach((card) => {
        const cat = card.getAttribute("data-category") || "all";
        const match = filter === "all" || cat === filter;

        if (match) {
          card.classList.remove("filter-hidden");
          card.classList.add("filter-enter");
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              card.classList.add("filter-enter-active");
            });
          });
          setTimeout(() => {
            card.classList.remove("filter-enter", "filter-enter-active");
          }, 450);
        } else {
          card.classList.add("filter-hidden");
          card.classList.remove("filter-enter", "filter-enter-active");
        }
      });
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        moveIndicator(btn);
        applyFilter(btn.getAttribute("data-filter"));
      });
    });

    function initIndicator() {
      const activeBtn = document.querySelector(".filter-btn.active");
      moveIndicator(activeBtn);
    }

    window.addEventListener("load", initIndicator);
    window.addEventListener("resize", initIndicator);

    // Reposition after language toggle (Arabic text changes button widths)
    document.getElementById("langToggle")?.addEventListener("click", () => {
      setTimeout(initIndicator, 60);
    });

    // Initial positioning (in case load event already fired)
    setTimeout(initIndicator, 50);
  }

  /* ── Whole-card click / keyboard navigation ──
     The overlay's Live Demo / GitHub links are real <a> tags,
     so a click on either of them is left to navigate natively —
     the card-level handler only fires for clicks elsewhere on
     the card (image, title, description, chips, empty space). */
  projectCards.forEach((card) => {
    const demoUrl = card.getAttribute("data-demo");
    if (!demoUrl) return;

    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return; // let overlay links handle themselves
      window.open(demoUrl, "_blank", "noopener");
    });

    card.addEventListener("keydown", (e) => {
      if (e.target.closest("a")) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.open(demoUrl, "_blank", "noopener");
      }
    });
  });
})();