(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const current = window.location.pathname.replace(/\/$/, "");
  document.querySelectorAll("[data-nav]").forEach(a => {
    const url = new URL(a.getAttribute("href"), window.location.href);
    const linkPath = url.pathname.replace(/\/$/, "");
    if (linkPath === current) a.classList.add("active");
  });
(function () {
  // keep your existing year + nav code above (if already in file)

  const slides = [
    {
      kicker: "Incident Response",
      title: "Forensics-ready clarity when it matters most.",
      desc: "Rapid intake, scoped action, and evidence-aware guidance to reduce uncertainty and protect what matters.",
      ctas: [
        { text: "Request intake", href: "contact/", primary: true },
        { text: "Explore services", href: "services/", primary: false }
      ]
    },
    {
      kicker: "Digital Forensics",
      title: "Defensible timelines, findings, and reporting.",
      desc: "Acquisition planning and analysis with clear documentation and stakeholder-ready outputs.",
      ctas: [
        { text: "Discuss a case", href: "contact/", primary: true },
        { text: "Forensics services", href: "services/", primary: false }
      ]
    },
    {
      kicker: "Readiness & Advisory",
      title: "Be ready before it hits.",
      desc: "Playbooks, tabletop support, and pragmatic improvements that reduce incident cost and confusion.",
      ctas: [
        { text: "Request a readiness call", href: "contact/", primary: true },
        { text: "See advisory options", href: "services/", primary: false }
      ]
    }
  ];

  const hk = document.getElementById("hk");
  const ht = document.getElementById("ht");
  const hd = document.getElementById("hd");
  const hcta = document.getElementById("hcta");

  const dots = Array.from(document.querySelectorAll(".dot[data-slide]"));
  const tiles = Array.from(document.querySelectorAll(".hero-tile[data-slide]"));

  if (!hk || !ht || !hd || !hcta || dots.length === 0) return;

  function setActive(idx) {
    const s = slides[idx];
    if (!s) return;

    hk.textContent = s.kicker;
    ht.textContent = s.title;
    hd.textContent = s.desc;

    // rebuild CTAs
    hcta.innerHTML = "";
    for (const c of s.ctas) {
      const a = document.createElement("a");
      a.className = c.primary ? "btn" : "btn btn-ghost";
      a.href = c.href;
      a.textContent = c.text;
      hcta.appendChild(a);
    }

    dots.forEach((d, i) => {
      const active = i === idx;
      d.classList.toggle("is-active", active);
      d.setAttribute("aria-selected", active ? "true" : "false");
    });

    tiles.forEach((t, i) => {
      t.classList.toggle("is-active", i === idx);
    });

    current = idx;
  }

  dots.forEach(btn => {
    btn.addEventListener("click", () => setActive(Number(btn.dataset.slide)));
  });

  tiles.forEach(btn => {
    btn.addEventListener("click", () => setActive(Number(btn.dataset.slide)));
  });

  // Optional auto-rotate (comment out if you don't want it)
  let current = 0;
  let timer = setInterval(() => setActive((current + 1) % slides.length), 8000);

  // Pause auto-rotate when user interacts
  function pause() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  dots.forEach(d => d.addEventListener("pointerdown", pause));
  tiles.forEach(t => t.addEventListener("pointerdown", pause));
})();

})();
