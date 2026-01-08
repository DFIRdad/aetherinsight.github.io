(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const path = window.location.pathname.replace(/\/$/, "");
  const links = document.querySelectorAll("[data-nav]");
  links.forEach(a => {
    const href = a.getAttribute("href").replace(/\/$/, "");
    if (href && (href === path || (href !== "/" && path.endsWith(href)))) {
      a.classList.add("active");
    }
  });
})();
