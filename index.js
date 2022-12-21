/* eslint-disable no-plusplus */
const hamburger = document.querySelector('.hamburger'); const navMenu = document.querySelector('.nav-menu'); const welcome = document.querySelector('.welcome'); const body = document.querySelector('body'); const navItem = document.querySelectorAll('.nav-item');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); navMenu.classList.toggle('active'); welcome.classList.toggle('active');
  body.style.overflow = 'hidden';
}); for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', () => { navMenu.classList.remove('active'); hamburger.classList.toggle('active'); welcome.classList.remove('active'); body.style.overflow = 'visible'; });
}