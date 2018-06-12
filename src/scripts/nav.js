const bars = document.querySelector('.bars');
const xMark = document.querySelector('.x-mark');
const nav = document.querySelector('.nav');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const content = document.querySelector('.content');
const projects = document.querySelector('.projects');
const projectThumbs = document.querySelector('.project-thumbs');
const carousel = document.querySelector('.carousel');

let currentPage = about;

bars.addEventListener('click', (e) => {
  bars.classList.add('hidden');
  xMark.classList.remove('hidden');
  nav.classList.add('open');
})

xMark.addEventListener('click', (e) => {
  xMark.classList.add('hidden');
  bars.classList.remove('hidden');
  nav.classList.remove('open');
})

nav.addEventListener('click', (e) => {
  if(e.target.classList.contains('nav__item')) {
    const page = e.target.innerHTML;
    switchContent(page);
  }
})

function switchContent(page) {  
  if(page === 'Welcome') {
    swapClass(about);
  } else if (page === 'Projects'){
    swapClass(projects);
    //reset to project thumbs and hide detail
    projectThumbs.classList.remove('hidden');
    carousel.classList.add('hidden');

  } else {
    swapClass(contact);
  }
  nav.classList.remove('open');
  bars.classList.remove('hidden');
  xMark.classList.add('hidden');
}

function swapClass(page) {
  currentPage.classList.add('hidden');
  page.classList.remove('hidden');
  currentPage = page;
}