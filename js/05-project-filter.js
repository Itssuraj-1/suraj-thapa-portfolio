/* =============================================================
   05-PROJECT-FILTER.JS
   Handles the All / Web / Software / E-commerce filter pills
   above the project list. Each project's categories live in its
   data-cat="..." attribute in index.html (space-separated, a
   project can belong to more than one — LaptopSathi is both
   "web" and "ecommerce").
============================================================= */

(function () {
  "use strict";

  var filterButtons = document.querySelectorAll(".filter-btn");
  var projects = document.querySelectorAll(".project");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Reset every button to the "not selected" state, then mark
      // just the clicked one as active.
      filterButtons.forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-selected", "true");

      var chosenFilter = button.getAttribute("data-filter");

      projects.forEach(function (project) {
        var categories = (project.getAttribute("data-cat") || "").split(" ");
        var shouldShow = chosenFilter === "all" || categories.indexOf(chosenFilter) !== -1;
        project.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });
})();
