// Mobile navbar hamburger trigger

const navbar = document.getElementById('navbar');
export function hamburgerTrigger() {
  navbar.classList.toggle('show-nav-links');
}

// Creating nav links

const navItems = [
  {
    name: 'News updates',
    link: 'https://www.columbiaspectator.com/news/2020/03/15/coronavirus-updates-columbia-and-barnard-move-to-online-classes-for-remainder-of-spring-semester',
  },
  {
    name: 'Housing and accommodations',
    link: 'https://www.columbiaspectator.com/news/2020/03/15/how-to-navigate-housing-and-university-accommodations/',
  },
  {
    name: 'Academic resources',
    link: 'https://www.columbiaspectator.com/news/2020/03/15/navigating-a-virtual-academic-landscape/',
  },
  {
    name: 'Staying on campus',
    link: 'https://www.columbiaspectator.com/news/2020/03/15/what-you-need-to-know-if-you-remain-on-campus/',
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