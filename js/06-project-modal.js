/* =============================================================
   06-PROJECT-MODAL.JS
   Everything about the "Project details" popup:
   1. projectData — the actual content for each project. Edit
      this object to change what shows up in the modal.
   2. Rendering that data into the modal's HTML.
   3. Opening/closing behaviour (click, Escape key, backdrop click).
============================================================= */

(function () {
  "use strict";

  /* -----------------------------------------------------------
     PROJECT CONTENT
     accent: which brand color this project's modal top border
             and category label use ("blue" | "violet" | "cyan").
             Matches the category color used on its project card.
     screenshots: optional array of { src, alt } shown as a small
             gallery under the Overview section.
  ----------------------------------------------------------- */
  var projectData = {
    "laptopsathi": {
      accent: "cyan",
      cat: "E-commerce",
      title: "LaptopSathi",
      overview:
        "A WooCommerce-based laptop e-commerce website built with WordPress, using a custom-styled Astra theme and Nepal-focused e-commerce functionality. The project was accompanied by full written documentation covering its build and configuration.",
      purpose:
        "To build a working, locally-relevant online store for laptops — configured for Nepal's payment and shipping context rather than a generic international storefront.",
      features: [
        "WooCommerce product catalog and store setup, organized by brand and category (Gaming, Business, Student, Ultrabooks, HP, Dell, Lenovo)",
        "Individual product pages with image gallery, pricing, sale price, and a detailed specifications table",
        "eSewa and Khalti payment gateway integration",
        "Nepal-specific shipping configuration",
        "VAT configuration",
        "Custom CSS fixes for theme styling issues",
        "Deployed and accessible online"
      ],
      tech: ["WordPress", "WooCommerce", "Astra theme", "HTML/CSS", "eSewa", "Khalti"],
      github: null,
      demo: null,
      screenshots: [
        { src: "assets/images/projects/laptopsathi-home.jpg", alt: "LaptopSathi homepage" },
        { src: "assets/images/projects/laptopsathi-shop.jpg", alt: "LaptopSathi product page with specifications table" }
      ]
    },
    "student-registration": {
      accent: "violet",
      cat: "Desktop software",
      title: "Student Registration System",
      overview:
        "A C# Windows Forms application connected to a SQL Server database for managing student records — built as a school assignment.",
      purpose:
        "To practice building a complete desktop CRUD application backed by a real relational database, including authentication.",
      features: [
        "Login authentication",
        "Create, read, update, and delete student records (User ID, name, email, phone number, age)",
        "SQL Server database (\u201crecord\u201d database, \u201cStudents\u201d table)",
        "Dynamically resizing DataGridView showing all records",
        "Logout flow"
      ],
      tech: ["C#", "Windows Forms", "SQL Server"],
      github: null,
      demo: null,
      screenshots: [
        { src: "assets/images/projects/student-registration.png", alt: "Student Registration System interface showing the records grid" }
      ]
    },
    "blog-system": {
      accent: "blue",
      cat: "Web application",
      title: "Blog Management System",
      overview:
        "A full-stack blog platform, self-branded \u201cHaerin,\u201d built as part of academic coursework. Visitors can browse a home feed of blog posts; signed-in users can write their own, publish them, and track how they perform.",
      purpose:
        "Academic project focused on building a complete, working blog platform end to end — not just a static layout, but real write, publish, and analytics flows.",
      features: [
        "Home feed listing the latest blogs with author, date, and a short excerpt",
        "Rich text editor for writing posts (bold, italic, headings, lists, links) with a save-draft option",
        "\u201cMy Blogs\u201d view for a signed-in author's own posts",
        "Analytics dashboard: total views, likes, comments, and blog count, plus per-post performance",
        "Profile management: profile photo, name, email, bio, and password change"
      ],
      tech: ["Web"],
      github: "https://github.com/Itssuraj-1/Blog-Management-System",
      demo: null,
      screenshots: [
        { src: "assets/images/projects/blog-home.png", alt: "Haerin home feed of latest blogs" },
        { src: "assets/images/projects/blog-write.png", alt: "Haerin write screen with rich text editor" },
        { src: "assets/images/projects/blog-analytics.png", alt: "Haerin analytics dashboard" },
        { src: "assets/images/projects/blog-profile.png", alt: "Haerin profile settings screen" }
      ]
    }
  };

  var modal = document.getElementById("projectModal");
  var modalPanel = modal ? modal.querySelector(".modal-panel") : null;
  var modalContent = document.getElementById("modalContent");

  // Maps the "accent" string above to the actual CSS variable
  // defined in css/00-base.css, so modal + card colors always match.
  var accentVarMap = {
    blue: "var(--blue)",
    violet: "var(--violet)",
    cyan: "var(--cyan)"
  };

  function renderProject(key) {
    var data = projectData[key];
    if (!data) return;

    // Tint the modal's top border to match this project's category.
    if (modalPanel) {
      modalPanel.style.setProperty("--modal-accent", accentVarMap[data.accent] || "var(--blue)");
    }

    var html = "";
    html += '<span class="modal-cat">' + data.cat + "</span>";
    html += "<h3>" + data.title + "</h3>";

    html += '<div class="modal-section"><h4>Overview</h4><p>' + data.overview + "</p></div>";

    // Screenshot gallery — only rendered when a project has real images.
    if (data.screenshots && data.screenshots.length) {
      html += '<div class="modal-section"><h4>Screenshots</h4><div class="modal-gallery">';
      data.screenshots.forEach(function (shot) {
        html +=
          '<a href="' + shot.src + '" target="_blank" rel="noopener">' +
          '<img src="' + shot.src + '" alt="' + shot.alt + '" loading="lazy">' +
          "</a>";
      });
      html += "</div></div>";
    }

    html += '<div class="modal-section"><h4>Purpose</h4><p>' + data.purpose + "</p></div>";

    html += '<div class="modal-section"><h4>Features</h4><ul class="modal-tags">';
    data.features.forEach(function (feature) {
      html += "<li>" + feature + "</li>";
    });
    html += "</ul></div>";

    html += '<div class="modal-section"><h4>Technology</h4><ul class="modal-tags">';
    data.tech.forEach(function (tech) {
      html += "<li>" + tech + "</li>";
    });
    html += "</ul></div>";

    var links = "";
    if (data.github) {
      links += '<a class="btn btn-secondary" href="' + data.github + '" target="_blank" rel="noopener">GitHub \u2197</a>';
    }
    if (data.demo) {
      links += '<a class="btn btn-primary" href="' + data.demo + '" target="_blank" rel="noopener">Live demo \u2197</a>';
    }
    if (links) {
      html += '<div class="modal-links">' + links + "</div>";
    }

    modalContent.innerHTML = html;
  }

  function openModal(key) {
    renderProject(key);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // stop the page scrolling behind the modal

    // Move keyboard focus into the modal for accessibility.
    var closeButton = modal.querySelector(".modal-close");
    if (closeButton) closeButton.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Every "Project details →" button has data-open="<project key>".
  document.querySelectorAll("[data-open]").forEach(function (button) {
    button.addEventListener("click", function () {
      openModal(button.getAttribute("data-open"));
    });
  });

  // Both the × button and the dark backdrop have data-close.
  document.querySelectorAll("[data-close]").forEach(function (el) {
    el.addEventListener("click", closeModal);
  });

  // Escape key closes the modal too, if it's currently open.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
