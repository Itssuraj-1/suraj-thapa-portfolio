/* =============================================================
   02-NAV-TOGGLE.JS
   Opens/closes the mobile navigation menu when the hamburger
   button is tapped, and closes it again once a link is chosen.
============================================================= */

(function () {
  "use strict";

  var navToggle = document.getElementById("navToggle");
  var navMobile = document.getElementById("navMobile");

  if (!navToggle || !navMobile) return; // elements not on the page — nothing to wire up

  navToggle.addEventListener("click", function () {
    var isOpen = navToggle.classList.toggle("is-open");
    navMobile.classList.toggle("is-open", isOpen);
    // aria-expanded tells screen readers whether the menu is open.
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Tapping any link inside the mobile menu should close it again,
  // otherwise it stays open and covers the section you just jumped to.
  navMobile.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navToggle.classList.remove("is-open");
      navMobile.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
})();
