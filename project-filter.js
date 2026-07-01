/* ══════════════════════════════════════════════════
   PROJECT FILTER — Premium Segmented Control
   Handles: All / Freelance / Personal filtering
   with sliding indicator + fade-up card animation
══════════════════════════════════════════════════ */
(function () {
  "use strict";

  const filterBtns = document.querySelectorAll(".filter-btn");
  const indicator = document.getElementById("filterIndicator");
  const projectCards = document.querySelectorAll(".project-card");

  if (!filterBtns.length || !indicator) return;

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
        // Force reflow then trigger transition
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
})();