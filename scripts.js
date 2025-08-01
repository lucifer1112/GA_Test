const menuBtn = document.getElementById('menuBtn');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeBtn = document.getElementById('closeBtn');

function openMenu() {
  mobileOverlay.classList.remove('hidden');
  setTimeout(() => mobileOverlay.classList.add('active'), 10);
  document.body.classList.add('menu-open');
}

function closeMenu() {
  mobileOverlay.classList.remove('active');
  setTimeout(() => mobileOverlay.classList.add('hidden'), 10);
  document.body.classList.remove('menu-open');
}

menuBtn.addEventListener('click', () => {
  if (mobileOverlay.classList.contains('hidden')) {
    openMenu();
  } else {
    closeMenu();
  }
});

closeBtn.addEventListener('click', closeMenu);

document.addEventListener('click', (e) => {
  if (
    !document.querySelector('#mobileOverlay div').contains(e.target) &&
    !menuBtn.contains(e.target) &&
    !mobileOverlay.classList.contains('hidden')
  ) {
    closeMenu();
  }
});

document.querySelectorAll('#mobileOverlay nav a').forEach(link => {
  link.addEventListener('click', closeMenu);
});
