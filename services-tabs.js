/* ══════════════════════════════════════════════════
   SERVICES — PREMIUM TAB LAYOUT
   Handles: tab switching, sliding glow indicator
   (vertical on desktop / horizontal on mobile),
   fade-slide panel transitions, keyboard nav,
   and repositioning on resize / language toggle.
══════════════════════════════════════════════════ */
(function () {
  "use strict";

  const sidebar = document.getElementById("servicesSidebar");
  const indicator = document.getElementById("tabIndicator");
  const content = document.getElementById("servicesContent");
  if (!sidebar || !indicator || !content) return;

  const tabs = Array.from(sidebar.querySelectorAll(".service-tab"));
  const panels = Array.from(content.querySelectorAll(".service-panel"));
  if (!tabs.length || !panels.length) return;

  const MOBILE_QUERY = window.matchMedia("(max-width: 860px)");
  const PANEL_SWITCH_MS = 220; // matches panelFadeOut duration

  function isMobile() {
    return MOBILE_QUERY.matches;
  }

  function moveIndicator(tab) {
    if (!tab) return;
    if (isMobile()) {
      indicator.style.height = "3px";
      indicator.style.width = tab.offsetWidth + "px";
      indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
      indicator.style.top = "auto";
    } else {
      indicator.style.width = "3px";
      indicator.style.height = tab.offsetHeight + "px";
      indicator.style.top = "0";
      indicator.style.transform = `translateY(${tab.offsetTop}px)`;
    }
  }

  function getActiveTab() {
    return sidebar.querySelector(".service-tab.active") || tabs[0];
  }

  function setActiveTab(tab) {
    tabs.forEach((t) => {
      const isActive = t === tab;
      t.classList.toggle("active", isActive);
      t.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    moveIndicator(tab);
  }

  function showPanel(serviceKey) {
    const currentPanel = panels.find((p) => !p.hidden);
    const nextPanel = panels.find(
      (p) => p.getAttribute("data-service") === serviceKey,
    );
    if (!nextPanel || nextPanel === currentPanel) return;

    if (currentPanel) {
      currentPanel.classList.add("panel-leaving");
      window.setTimeout(() => {
        currentPanel.hidden = true;
        currentPanel.classList.remove("panel-leaving");
      }, PANEL_SWITCH_MS);
    }

    window.setTimeout(
      () => {
        nextPanel.hidden = false;
        // Restart the fade-in animation cleanly
        nextPanel.style.animation = "none";
        // Force reflow so the animation can be re-applied
        void nextPanel.offsetWidth;
        nextPanel.style.animation = "";
      },
      currentPanel ? PANEL_SWITCH_MS : 0,
    );
  }

  function activateService(serviceKey, tab) {
    setActiveTab(tab);
    showPanel(serviceKey);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) return;
      activateService(tab.getAttribute("data-service"), tab);
      if (isMobile()) {
        tab.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    });

    tab.addEventListener("keydown", (e) => {
      const idx = tabs.indexOf(tab);
      let nextIdx = null;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        nextIdx = (idx + 1) % tabs.length;
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        nextIdx = (idx - 1 + tabs.length) % tabs.length;
      }
      if (nextIdx !== null) {
        e.preventDefault();
        const nextTab = tabs[nextIdx];
        nextTab.focus();
        activateService(nextTab.getAttribute("data-service"), nextTab);
      }
    });
  });

  function repositionIndicator() {
    moveIndicator(getActiveTab());
  }

  window.addEventListener("load", repositionIndicator);
  window.addEventListener("resize", repositionIndicator, { passive: true });
  MOBILE_QUERY.addEventListener?.("change", repositionIndicator);

  // Reposition after language toggle (Arabic text changes tab widths)
  document.getElementById("langToggle")?.addEventListener("click", () => {
    window.setTimeout(repositionIndicator, 80);
  });

  // Initial positioning
  window.setTimeout(repositionIndicator, 50);
})();