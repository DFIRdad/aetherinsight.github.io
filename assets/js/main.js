(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const current = window.location.pathname.replace(/\/$/, "");
  document.querySelectorAll("[data-nav]").forEach(a => {
    const url = new URL(a.getAttribute("href"), window.location.href);
    const linkPath = url.pathname.replace(/\/$/, "");
    if (linkPath === current) a.classList.add("active");
  });
})();
