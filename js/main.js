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

/* ── REFERENCIE: FILTER + MODAL ── */
(function () {
  const grid = document.querySelector('.referencie-grid--full');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.referencia'));
  const filterBtns = Array.from(document.querySelectorAll('.ref-filter-btn'));
  const overlay = document.getElementById('ref-modal-overlay');
  const modalBody = document.getElementById('ref-modal-body');
  const closeBtn = document.getElementById('ref-modal-close');
  const prevBtn = document.getElementById('ref-modal-prev');
  const nextBtn = document.getElementById('ref-modal-next');

  let activeFilter = 'all';
  let currentCard = null;

  function applyFilter(filter) {
    activeFilter = filter;
    cards.forEach(card => {
      card.hidden = !(filter === 'all' || card.dataset.category === filter);
    });
    filterBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === filter));
  }

  function visibleCards() {
    return cards.filter(card => activeFilter === 'all' || card.dataset.category === activeFilter);
  }

  function renderModal(card) {
    currentCard = card;
    const photo = card.querySelector('.referencia-photo');
    const name = card.querySelector('.referencia-autor strong').textContent;
    const role = card.querySelector('.referencia-autor span').textContent;
    const badge = card.querySelector('.referencia-badge').textContent;
    const fullHtml = card.querySelector('.referencia-full').innerHTML;

    modalBody.innerHTML =
      (photo ? `<img class="ref-modal-photo" src="${photo.getAttribute('src')}" alt="${photo.getAttribute('alt')}">` : '') +
      `<strong class="ref-modal-name">${name}</strong>` +
      `<span class="ref-modal-role">${role}</span>` +
      `<span class="ref-modal-badge">${badge}</span>` +
      `<div class="ref-modal-text">${fullHtml}</div>`;

    modalBody.scrollTop = 0;
  }

  function openModal(card) {
    renderModal(card);
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = '';
    currentCard = null;
  }

  function navigate(dir) {
    const list = visibleCards();
    if (!list.length || !currentCard) return;
    let idx = list.indexOf(currentCard);
    if (idx === -1) idx = 0;
    idx = (idx + dir + list.length) % list.length;
    renderModal(list[idx]);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  cards.forEach(card => {
    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn.addEventListener('click', () => navigate(1));

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (overlay.hidden) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
})();