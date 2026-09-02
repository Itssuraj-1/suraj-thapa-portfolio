/* =============================================================
   07-SKILL-TOOLTIP.JS
   Shows a one-line description under the skills grid when the
   visitor hovers or keyboard-focuses a skill that has a
   data-desc="..." attribute in index.html.
============================================================= */

(function () {
  "use strict";

  var tooltip = document.getElementById("skillTooltip");
  var skillsWithDescriptions = document.querySelectorAll(".skill-group li[data-desc]");

  skillsWithDescriptions.forEach(function (skillItem) {
    function showDescription() {
      if (tooltip) tooltip.textContent = skillItem.getAttribute("data-desc");
    }
    function hideDescription() {
      if (tooltip) tooltip.textContent = "";
    }

    // Mouse users get hover; keyboard users tabbing through the
    // list get the same text via focus/blur.
    skillItem.addEventListener("mouseenter", showDescription);
    skillItem.addEventListener("focus", showDescription);
    skillItem.addEventListener("mouseleave", hideDescription);
    skillItem.addEventListener("blur", hideDescription);
  });
})();
