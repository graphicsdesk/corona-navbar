// Mobile navbar hamburger trigger

const navbar = document.getElementById('navbar');
export function hamburgerTrigger() {
  navbar.classList.toggle('show-nav-links');
}

// Hide everything if on a contributor page

const { pathname } = window.location;

if (pathname.indexOf('/contributors') === 0) {
  const stylesLink = document.querySelector('.story-summary .twolines link');
  stylesLink.parentNode.removeChild(stylesLink);
  navbar.style.display = 'none';
} else {
  createNavLinks();
}

// Creating nav links

function createNavLinks() {
  const navItems = [
    {
      name: 'News updates',
      link: 'https://www.columbiaspectator.com/news/2020/03/15/coronavirus-updates-columbia-and-barnard-move-to-online-classes-for-remainder-of-spring-semester/',
    },
    {
      name: 'Housing & accommodations',
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
    {
      name: 'The view from here',
      link: 'https://www.columbiaspectator.com/the-eye/2020/03/26/letter-from-the-editor-issue-4/',
    },
  ];

  const navLinks = document.getElementById('nav-links');

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
}
