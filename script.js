const burgerIcon = document.querySelector('.menu-container');
const headerContent = document.querySelector('.header-content');
const closeIcon = document.querySelector('.close-icon');
const main = document.querySelector('.main-contain');
const scroll = document.querySelector('.go-to-top');
const nav = document.querySelector('nav');

burgerIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  headerContent.classList.add('menu-open');
});

closeIcon.addEventListener('click', () => {
  headerContent.classList.remove('menu-open');
});
nav.addEventListener('click', (e) => {
  e.stopPropagation();
});

window.addEventListener('click', () => {
  headerContent.classList.remove('menu-open');
});

scroll.addEventListener('click', () => {
  main.scrollTo(0, 0);
});
