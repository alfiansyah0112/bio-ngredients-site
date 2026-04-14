(() => {
  const nav = document.querySelector(".nav");
  const hamburger = document.querySelector(".hamburger");
  const menuLinks = document.querySelectorAll(".nav-menu a");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      const open = nav.classList.toggle("menu-open");
      hamburger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    menuLinks.forEach(link =>
      link.addEventListener("click", () => {
        nav.classList.remove("menu-open");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      })
    );
  }

  const revealTargets = document.querySelectorAll(".reveal, .reveal-stagger");
  if ("IntersectionObserver" in window && revealTargets.length) {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add("in"));
  }

  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".form-status");
  if (form && status) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const data = new FormData(form);
      if (!data.get("name") || !data.get("email") || !data.get("message")) {
        status.textContent = "Please fill in the required fields.";
        status.style.background = "#f3c6a8";
        status.classList.add("show");
        return;
      }
      status.textContent = "Thanks — your request is in. We'll be in touch within two business days.";
      status.style.background = "var(--sage)";
      status.classList.add("show");
      form.reset();
      setTimeout(() => status.classList.remove("show"), 6000);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
