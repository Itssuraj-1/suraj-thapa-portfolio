/* =============================================================
   09-CONTACT-FORM.JS
   No backend on a static site, so this builds a mailto: link
   from the form fields and opens the visitor's mail app with
   everything pre-filled — same idea as the plain email button,
   just with structured fields first.
============================================================= */
(function () {
  "use strict";

  var form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var interest = form.interest.value;
    var message = form.message.value.trim();

    var subject = "Portfolio contact from " + name + (interest ? " — " + interest : "");
    var body =
      "Name: " + name +
      "\nEmail: " + email +
      "\nInterested in: " + interest +
      "\n\n" + message;

    window.location.href =
      "mailto:thapasuraj3215@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  });
})();