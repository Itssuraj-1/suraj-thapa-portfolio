/* =============================================================
   01-SCROLL-PROGRESS.JS
   Two small jobs tied to page scroll position:
   1. Fill the thin bar at the very top of the page (#scrollProgress)
      so it grows as the visitor reads down the page.
   2. Add/remove the .is-scrolled class on the nav bar so it gets
      a frosted background once the page has scrolled past the top.
============================================================= */

(function () {
  "use strict";

  var progressBar = document.getElementById("scrollProgress");
  var nav = document.getElementById("siteNav");

  function updateOnScroll() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    var percentScrolled = pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = percentScrolled + "%";
    }

    // Once the user has scrolled more than ~12px, switch the nav
    // to its "scrolled" look (blurred background, smaller height).
    if (nav) {
      nav.classList.toggle("is-scrolled", scrollTop > 12);
    }
  }

  // { passive: true } tells the browser this listener never calls
  // preventDefault(), which keeps scrolling smooth on mobile.
  document.addEventListener("scroll", updateOnScroll, { passive: true });

  // Run once immediately in case the page loads already scrolled
  // (e.g. the visitor refreshes mid-page).
  updateOnScroll();
})();
