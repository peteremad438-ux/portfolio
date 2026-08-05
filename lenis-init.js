
(function () {
  "use strict";

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (typeof Lenis === "undefined" || reduceMotion) return;

  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Expose so other scripts (main.js anchor/scroll-top handlers) can
  // route their programmatic scrolls through Lenis instead of the
  // native scrollIntoView/scrollTo, so everything feels consistent.
  window.__lenis = lenis;

  // Lenis drives the real document scroll position, so the existing
  // window.addEventListener("scroll", ...) logic in main.js (progress
  // bar, navbar state, active nav link) keeps working exactly as-is.
})();