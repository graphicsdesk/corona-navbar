const navbar = document.getElementById('navbar');

// Mobile navbar hamburger trigger

export function hamburgerTrigger() {
  navbar.classList.toggle('show-nav-links');
}

// const navLinksWidth = navbar.clientWidth - document.getElementById('cds-logo-desktop-container').clientWidth;