// ==========================================================
// AURORA PER LE MARCHE – main.js
// ==========================================================

// ---------- Modale Privacy ----------
const privacyModal = document.getElementById('privacy-modal');

if (privacyModal) {
  // Chiude cliccando sullo sfondo
  privacyModal.addEventListener('click', (e) => {
    if (e.target === privacyModal) privacyModal.style.display = 'none';
  });

  // Chiude con il tasto Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') privacyModal.style.display = 'none';
  });
}

// ---------- Menu mobile ----------
const mobileMenuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Chiude il menu automaticamente quando clicchi su un link
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}
