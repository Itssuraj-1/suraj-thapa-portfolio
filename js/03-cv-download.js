/* =============================================================
   03-CV-DOWNLOAD.JS
   Wires up both "Download CV" links (one in the nav, one in the
   hero) to the CV file. If the PDF hasn't been added to
   assets/ yet, this shows a friendly message instead of a
   broken download.
============================================================= */

(function () {
  "use strict";

  // Change this if you rename or move the CV file.
  var CV_PATH = "assets/Suraj-Thapa-CV.pdf";

  ["cvLink", "cvLinkHero"].forEach(function (id) {
    var link = document.getElementById(id);
    if (!link) return;

    link.setAttribute("href", CV_PATH);
    link.setAttribute("download", "Suraj-Thapa-CV.pdf");

    link.addEventListener("click", function (event) {
      // HEAD request just checks whether the file exists, without
      // downloading the whole thing.
      fetch(CV_PATH, { method: "HEAD" })
        .then(function (response) {
          if (!response.ok) {
            event.preventDefault();
            alert("The CV file will be available here shortly — check back soon.");
          }
          // If response.ok is true, do nothing — let the browser's
          // normal download behaviour continue.
        })
        .catch(function () {
          // Network/file error (e.g. running from file:// locally)
          event.preventDefault();
          alert("The CV file will be available here shortly — check back soon.");
        });
    });
  });
})();
