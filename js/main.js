function toggleAccordion(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
}

function toggleMenu(btn) {
  btn.classList.toggle('open');
  document.getElementById('nav-mobile').classList.toggle('open');
}

function closeMenu() {
  document.querySelector('.nav-hamburger').classList.remove('open');
  document.getElementById('nav-mobile').classList.remove('open');
}

function toggleDropdown(btn) {
  const menu = btn.nextElementSibling;
  btn.classList.toggle('open');
  menu.classList.toggle('open');
}

document.addEventListener('click', function(e) {
  const dropdown = document.querySelector('.nav-dropdown');
  if (dropdown && !dropdown.contains(e.target)) {
    document.querySelectorAll('.nav-dropdown-toggle').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  }
});