const menuButton = document.getElementById('btn-hamburger');
const mobileMenu = document.getElementById('menu-mobile');
const mobileMenuLinks = mobileMenu?.querySelectorAll('a');

// Synchronise l'affichage du menu, l'icone et les attributs d'accessibilite.
function toggleMenu(forceState) {
    if (!menuButton || !mobileMenu) return;

    const isMenuOpen = forceState ?? mobileMenu.hidden;

    mobileMenu.hidden = !isMenuOpen;
    menuButton.classList.toggle('is-open', isMenuOpen);
    menuButton.setAttribute('aria-expanded', String(isMenuOpen));
    menuButton.setAttribute('aria-label', isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu');
}

menuButton?.addEventListener('click', () => toggleMenu());

// Referme le menu apres une navigation ou avec la touche Echap.
mobileMenuLinks?.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') toggleMenu(false);
});