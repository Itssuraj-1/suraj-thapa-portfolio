/* =============================================================
   08-MAIN.JS
   Small startup tasks that don't belong in any single feature
   file. Load this LAST, after every other js/*.js file.
============================================================= */

(function () {
  "use strict";

  /* -----------------------------------------------------------
     Color each "More from GitHub" repo card's little language
     dot based on its data-lang attribute in index.html, so the
     grid isn't a wall of identical blue dots.
  ----------------------------------------------------------- */
  var languageColors = {
    "HTML": "var(--blue)",
    "Python": "var(--cyan)",
    "PHP": "var(--violet)",
    "CSS": "var(--amber)",
    "XSLT": "var(--blue-deep)"
  };

  document.querySelectorAll(".repo-card[data-lang]").forEach(function (card) {
    var language = card.getAttribute("data-lang");
    var color = languageColors[language];
    if (color) {
      card.style.setProperty("--repo-color", color);
    }
  });

  /* -----------------------------------------------------------
     Friendly console note for anyone who opens devtools —
     harmless, but a nice touch on a developer's own portfolio.
  ----------------------------------------------------------- */
  console.log("%cHi, I'm Suraj. Thanks for checking the code!", "color:#2F5EFF; font-weight:600;");
})();
