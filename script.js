(function () {
  "use strict";

  /* =========================================================
     CONFIG — Google Apps Script deployed Web App URL
     ========================================================= */
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzNpgEJuOnlMR8gf8LZ5iiWaqu5keQF-Q2ApNZASF_p3MV4DKQTbPJ1Ki_MUAvEHEte/exec";

  /* =========================================================
     MOBILE HAMBURGER MENU
     ========================================================= */

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  function closeMobileMenu() {
    if (!mobileMenu || !hamburger) return;

    mobileMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open menu");
  }

  function toggleMobileMenu() {
    if (!mobileMenu || !hamburger) return;

    const isOpen = mobileMenu.classList.toggle("open");

    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", toggleMobileMenu);

    document
      .querySelectorAll(".mobile-link, .mobile-cta")
      .forEach(function (link) {
        link.addEventListener("click", closeMobileMenu);
      });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    });
  }

  /* =========================================================
     SMOOTH SCROLL
     ========================================================= */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId.length <= 1) {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      const header = document.getElementById("site-header");
      const headerHeight = header ? header.offsetHeight : 0;

      const top =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight -
        16;

      window.scrollTo({
        top: top,
        behavior: "smooth"
      });

      closeMobileMenu();
    });
  });

  /* =========================================================
     ACTIVE NAVIGATION LINK ON SCROLL
     ========================================================= */

  const navLinks = document.querySelectorAll(".nav-link[data-nav]");

  const sections = Array.from(navLinks)
    .map(function (link) {
      const id = link.getAttribute("href");

      if (!id) {
        return null;
      }

      return document.querySelector(id);
    })
    .filter(Boolean);

  function updateActiveNav() {
    const header = document.getElementById("site-header");
    const headerHeight = header ? header.offsetHeight : 0;

    let currentId = sections.length
      ? "#" + sections[0].id
      : null;

    sections.forEach(function (section) {
      const rect = section.getBoundingClientRect();

      if (rect.top - headerHeight <= 120) {
        currentId = "#" + section.id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === currentId
      );
    });
  }

  let navTicking = false;

  window.addEventListener("scroll", function () {
    if (!navTicking) {
      window.requestAnimationFrame(function () {
        updateActiveNav();
        navTicking = false;
      });

      navTicking = true;
    }
  });

  updateActiveNav();

  /* =========================================================
     SCROLL REVEAL ANIMATIONS
     ========================================================= */

  const revealTargets = document.querySelectorAll(
    ".about-card, .stack-card, .timeline-item, .project-card, .edu-card, .cert-card, .stat-card, .contact-card"
  );

  revealTargets.forEach(function (element) {
    element.classList.add("reveal");
  });

  /* =========================================================
     SKILL BAR ANIMATIONS
     ========================================================= */

  const skillFills = document.querySelectorAll(".skill-fill");

  skillFills.forEach(function (fill) {
    const targetWidth = fill.style.width;

    fill.style.setProperty(
      "--target-width",
      targetWidth
    );

    fill.style.width = "0";
  });

  /* =========================================================
     INTERSECTION OBSERVER
     ========================================================= */

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");

            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealTargets.forEach(function (element) {
      revealObserver.observe(element);
    });

    const skillObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");

            skillObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.4
      }
    );

    skillFills.forEach(function (fill) {
      skillObserver.observe(fill);
    });
  } else {
    /*
      Fallback for older browsers that do not support
      IntersectionObserver.
    */

    revealTargets.forEach(function (element) {
      element.classList.add("in-view");
    });

    skillFills.forEach(function (fill) {
      fill.classList.add("in-view");
    });
  }

  /* =========================================================
     CONTACT FORM
     VALIDATION + SUBMISSION
     ========================================================= */

  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const statusEl = document.getElementById("form-status");

  const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    message: document.getElementById("message")
  };

  /* =========================================================
     FIELD ERROR HANDLING
     ========================================================= */

  function setFieldError(fieldName, message) {
    const input = fields[fieldName];
    const errorEl = document.getElementById(
      fieldName + "-error"
    );

    if (!input || !errorEl) {
      return;
    }

    const wrap = input.closest(".form-field");

    if (!wrap) {
      return;
    }

    if (message) {
      wrap.classList.add("invalid");
      errorEl.textContent = message;
    } else {
      wrap.classList.remove("invalid");
      errorEl.textContent = "";
    }
  }

  /* =========================================================
     EMAIL VALIDATION
     ========================================================= */

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  /* =========================================================
     PHONE VALIDATION
     ========================================================= */

  function isValidPhone(value) {
    const digitsOnly = value.replace(
      /[\s().-]/g,
      ""
    );

    return /^\+?\d{7,15}$/.test(digitsOnly);
  }

  /* =========================================================
     FORM VALIDATION
     ========================================================= */

  function validateForm() {
    let valid = true;

    /* NAME */

    const nameVal = fields.name.value.trim();

    if (!nameVal) {
      setFieldError(
        "name",
        "Please enter your name."
      );

      valid = false;
    } else {
      setFieldError("name", "");
    }

    /* EMAIL */

    const emailVal = fields.email.value.trim();

    if (!emailVal) {
      setFieldError(
        "email",
        "Please enter your email."
      );

      valid = false;
    } else if (!isValidEmail(emailVal)) {
      setFieldError(
        "email",
        "Please enter a valid email address."
      );

      valid = false;
    } else {
      setFieldError("email", "");
    }

    /* PHONE */

    const phoneVal = fields.phone.value.trim();

    if (!phoneVal) {
      setFieldError(
        "phone",
        "Please enter your phone number."
      );

      valid = false;
    } else if (!isValidPhone(phoneVal)) {
      setFieldError(
        "phone",
        "Please enter a valid phone number."
      );

      valid = false;
    } else {
      setFieldError("phone", "");
    }

    /* MESSAGE */

    const messageVal =
      fields.message.value.trim();

    if (!messageVal) {
      setFieldError(
        "message",
        "Please enter a message."
      );

      valid = false;
    } else {
      setFieldError("message", "");
    }

    return valid;
  }

  /* =========================================================
     STATUS MESSAGE
     ========================================================= */

  function showStatus(message, type) {
    if (!statusEl) {
      return;
    }

    statusEl.textContent = message;

    statusEl.className =
      "form-status" +
      (type ? " " + type : "");
  }

  /* =========================================================
     LOADING STATE
     ========================================================= */

  function setLoading(isLoading) {
    if (!submitBtn) {
      return;
    }

    submitBtn.disabled = isLoading;

    submitBtn.classList.toggle(
      "loading",
      isLoading
    );
  }

  /* =========================================================
     SUCCESS
     ========================================================= */

  function showSuccess() {
    setLoading(false);

    showStatus(
      "Message sent successfully!",
      "success"
    );

    if (form) {
      form.reset();
    }

    Object.keys(fields).forEach(function (key) {
      setFieldError(key, "");
    });
  }

  /* =========================================================
     ERROR
     ========================================================= */

  function showError() {
    setLoading(false);

    showStatus(
      "Something went wrong. Please try again.",
      "error"
    );
  }

  /* =========================================================
     CONTACT FORM SUBMISSION
     ========================================================= */

  if (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();

        showStatus("", "");

        if (!validateForm()) {
          return;
        }

        setLoading(true);

        const name =
          fields.name.value.trim();

        const email =
          fields.email.value.trim();

        const phone =
          fields.phone.value.trim();

        const message =
          fields.message.value.trim();

        const url =
          SCRIPT_URL +
          "?" +
          new URLSearchParams({
            name: name,
            email: email,
            phone: phone,
            message: message
          });

        fetch(url, {
          method: "GET",
          mode: "no-cors"
        })
          .then(function () {
            showSuccess();
          })
          .catch(function () {
            showError();
          });
      }
    );

    /* =======================================================
       CLEAR FIELD ERRORS WHILE TYPING
       ======================================================= */

    Object.keys(fields).forEach(function (key) {
      const field = fields[key];

      if (!field) {
        return;
      }

      field.addEventListener(
        "input",
        function () {
          const formField =
            field.closest(".form-field");

          if (
            formField &&
            formField.classList.contains("invalid")
          ) {
            setFieldError(key, "");
          }
        }
      );
    });
  }
})();