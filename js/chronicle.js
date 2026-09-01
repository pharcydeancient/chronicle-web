(function () {
  const drawer = document.getElementById("drawer");
  const open = document.getElementById("menuBtn");
  if (open && drawer) {
    open.addEventListener("click", () => drawer.classList.add("open"));
    drawer.addEventListener("click", (e) => { if (e.target === drawer) drawer.classList.remove("open"); });
  }
  const form = document.getElementById("searchForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = (form.querySelector("input") || {}).value || "";
      window.location.href = "search.html?q=" + encodeURIComponent(q);
    });
  }
})();