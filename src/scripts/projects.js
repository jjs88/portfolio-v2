const projectThumbs = document.querySelector('.project-thumbs');
const slide = document.querySelector('.slide');
const carousel = document.querySelector('.carousel');
import { thumbTemp, projectDetailTemp } from '../templates';
import {data} from '../data';

loadThumbNails();

function loadThumbNails() {
  data.forEach(project => thumbTemp(projectThumbs, project));
}

projectThumbs.addEventListener('click', (e) => {
  const project = e.target.parentNode;
  loadSlide(project);
})

function loadSlide(project) {
  const [item] = data.filter(item => item.name === project.dataset.id);
  projectDetailTemp(slide, item)
  //set slide data attribute
  slide.setAttribute('data-slide', item.name);
  //hide thumbs
  projectThumbs.classList.add('hidden');
  //show carousel
  carousel.classList.remove('hidden');
}


