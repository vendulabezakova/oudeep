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