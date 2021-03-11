const themeToggle = document.querySelector('#navbar header i');
const body = document.querySelector('body');

themeToggle.addEventListener('click', darkLightModeToggle);

function darkLightModeToggle() {
  body.classList.toggle('darkMode');
}
