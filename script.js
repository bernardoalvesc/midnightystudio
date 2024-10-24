// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeIcon.textContent = '🌜'; // Moon emoji
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeIcon.textContent = '🌞'; // Sun emoji
  }
});
