const navMenu = document.getElementById('nav-menu'),
      navOpenBtn = document.getElementById('menu-open-button'),
      navCloseBtn = document.getElementById('menu-close-button');

/* Toggle menu sidebar open */
if(navOpenBtn) {
  navOpenBtn.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* Toggle menu sidebar closed */
if(navCloseBtn) {
  navCloseBtn.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* Instantly close drawer when picking a destination menu link */
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});
