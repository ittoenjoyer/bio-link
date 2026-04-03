const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️ Modalità Giorno';
  } else {
    toggle.textContent = '🌙 Modalità Notte';
  }
});
