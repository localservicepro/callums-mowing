/* Callum's Mowing — site interactions
   Vanilla, no dependencies, progressive enhancement only. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isDesktop = function () { return window.matchMedia("(min-width: 901px)").matches; };

  /* ---------------------------------------------------------------- header */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------------------------------------------------------ mobile nav */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  var scrim = document.querySelector(".nav-scrim");

  function closeNav() {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
      document.body.classList.toggle("nav-open", !open);
    });
    if (scrim) scrim.addEventListener("click", closeNav);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
    window.addEventListener("resize", function () {
      if (isDesktop()) closeNav();
    });
  }

  /* ---------------------------------------------------- services dropdown */
  document.querySelectorAll(".has-menu").forEach(function (wrap) {
    var btn = wrap.querySelector(".has-menu__toggle");
    if (!btn) return;

    var open = function (state) {
      wrap.setAttribute("data-open", String(state));
      btn.setAttribute("aria-expanded", String(state));
    };

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      open(wrap.getAttribute("data-open") !== "true");
    });

    wrap.addEventListener("mouseenter", function () { if (isDesktop()) open(true); });
    wrap.addEventListener("mouseleave", function () { if (isDesktop()) open(false); });
    wrap.addEventListener("focusout", function (e) {
      if (isDesktop() && !wrap.contains(e.relatedTarget)) open(false);
    });
    document.addEventListener("click", function (e) {
      if (isDesktop() && !wrap.contains(e.target)) open(false);
    });
  });

  /* -------------------------------------------------------- scroll reveal */
  var revealables = document.querySelectorAll("[data-reveal]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    revealables.forEach(function (el) { observer.observe(el); });

    /* Stagger direct children of any [data-reveal-group] container. */
    document.querySelectorAll("[data-reveal-group]").forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        if (child.hasAttribute("data-reveal")) {
          child.style.setProperty("--reveal-delay", Math.min(i, 6) * 70 + "ms");
        }
      });
    });
  }

  /* Hero content animates immediately rather than waiting on the observer. */
  document.querySelectorAll(".hero [data-reveal]").forEach(function (el, i) {
    el.style.setProperty("--reveal-delay", 90 + i * 110 + "ms");
    requestAnimationFrame(function () { el.classList.add("is-visible"); });
  });

  /* ------------------------------------------------ before / after sliders */
  document.querySelectorAll(".ba").forEach(function (ba) {
    var range = ba.querySelector(".ba__range");
    var before = ba.querySelector(".ba__before");
    var line = ba.querySelector(".ba__line");
    var grip = ba.querySelector(".ba__grip");
    if (!range || !before) return;

    var paint = function (value) {
      before.style.clipPath = "inset(0 " + (100 - value) + "% 0 0)";
      if (line) line.style.left = value + "%";
      if (grip) grip.style.left = value + "%";
    };

    paint(Number(range.value));
    range.addEventListener("input", function () { paint(Number(range.value)); });
  });

  /* --------------------------------------------------------- count-up stats */
  var counters = document.querySelectorAll("[data-count-to]");
  if (counters.length && !reduceMotion && "IntersectionObserver" in window) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        countObserver.unobserve(el);

        var target = parseFloat(el.getAttribute("data-count-to"));
        var decimals = (el.getAttribute("data-count-to").split(".")[1] || "").length;
        var started = null;

        var tick = function (now) {
          if (started === null) started = now;
          var progress = Math.min((now - started) / 900, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = (target * eased).toFixed(decimals);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });

    counters.forEach(function (el) { countObserver.observe(el); });
  }

  /* -------------------------------------------------- quote form behaviour */
  var quoteForm = document.getElementById("quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      var btn = quoteForm.querySelector("button[type=submit]");

      /* With a form endpoint configured, let the browser post it normally. */
      if (quoteForm.getAttribute("action")) {
        if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
        return;
      }

      /* No endpoint: compose a pre-filled email so the enquiry still lands. */
      e.preventDefault();
      var data = new FormData(quoteForm);
      var picked = data.getAll("services");
      var lines = [
        "Name: " + (data.get("name") || ""),
        "Email: " + (data.get("email") || ""),
        "Phone: " + (data.get("phone") || ""),
        "Property address: " + (data.get("address") || ""),
        "Services needed: " + (picked.length ? picked.join(", ") : "Not specified"),
        "",
        "Job notes:",
        data.get("notes") || "(none)"
      ];

      var to = quoteForm.getAttribute("data-fallback-email");
      var href =
        "mailto:" + to +
        "?subject=" + encodeURIComponent("Quote request — " + (data.get("address") || data.get("name") || "website")) +
        "&body=" + encodeURIComponent(lines.join("\n"));

      window.location.href = href;
      if (btn) { btn.disabled = true; btn.textContent = "Opening your email…"; }
      setTimeout(function () {
        window.location.href = quoteForm.getAttribute("data-thanks") || "../thank-you/";
      }, 1200);
    });
  }

  /* Close the mobile nav after tapping an in-page link. */
  document.querySelectorAll("#primary-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (!isDesktop()) closeNav();
    });
  });
})();
