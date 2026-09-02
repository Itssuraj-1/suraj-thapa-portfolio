/* =============================================================
   04-HERO-INTERACTION.JS
   Makes the faint grid lines in the hero background follow the
   mouse — a soft spotlight effect. Skipped entirely if the
   visitor has "reduce motion" turned on at the OS level.
============================================================= */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var hero = document.querySelector(".hero");
  var heroGrid = document.querySelector(".hero-grid");

  if (!hero || !heroGrid || prefersReducedMotion) return;

  hero.addEventListener("mousemove", function (event) {
    var rect = hero.getBoundingClientRect();

    // Convert mouse position to a percentage within the hero box,
    // so the spotlight is expressed in the same units as the CSS
    // radial-gradient's "at X% Y%" position.
    var xPercent = ((event.clientX - rect.left) / rect.width) * 100;
    var yPercent = ((event.clientY - rect.top) / rect.height) * 100;

    var maskValue =
      "radial-gradient(ellipse 60% 55% at " +
      xPercent + "% " + yPercent +
      "%, black 20%, transparent 75%)";

    heroGrid.style.maskImage = maskValue;
    heroGrid.style.webkitMaskImage = maskValue; // Safari needs the prefixed property too
  });
})();
