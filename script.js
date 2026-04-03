document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    btn.textContent = "☀️";
  }

  btn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");

    btn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
