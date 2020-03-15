const navbar = document.getElementById('navbar');

// Mobile navbar hamburger trigger

export function hamburgerTrigger() {
  navbar.classList.toggle('show-nav-links');
}

// const navLinksWidth = navbar.clientWidth - document.getElementById('cds-logo-desktop-container').clientWidth;

// Creating nav links

const navItems = [
  {
    name: 'Live updates',
    link: '/',
  },
  {
    name: 'Housing and accommodations',
    link: '',
  },
  {
    name: 'Academic resources',
    link: '',
  },
  {
    name: 'Staying on campus',
    link: '',
  },
];

const navLinks = document.getElementById('nav-links');
const { pathname } = window.location;

navItems.forEach(({ name, link}) => {
  const div = document.createElement('div');
  div.classList.add('nav-link');
  if (link.includes(pathname))
    div.classList.add('nav-link-highlighted');
  const a = document.createElement('a');
  a.setAttribute('href', link);
  a.innerText = name;
  div.append(a);
  navLinks.append(div);
});