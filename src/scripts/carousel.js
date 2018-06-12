import {data} from '../data';
import { projectDetailTemp } from '../templates';

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slide = document.querySelector('.slide');

arrowLeft.addEventListener('click', (e) => {
  switchSlide('left');
});

arrowRight.addEventListener('click', (e) => {
  switchSlide('right');
});

// helper functions
function getSlidePosition() {
  let pos;
  for(var i = 0; i < data.length; i++) {
    if(data[i].name === slide.getAttribute('data-slide')) {
      pos = i;
      break;
    }
  }
  return pos;
}

function switchSlide(direction) {
  const pos = getSlidePosition();
  switch(direction) {
    case 'left':
      if(pos === 0) {
        const project = data[data.length-1];
        projectDetailTemp(slide, project);
        slide.setAttribute('data-slide', project.name);
      } else {
        const project = data[pos-1];
        projectDetailTemp(slide, project);
        slide.setAttribute('data-slide', project.name);
      }
      return;
    case 'right': 
      if(pos === data.length-1) {
        const project = data[0];
        projectDetailTemp(slide, project);
        slide.setAttribute('data-slide', project.name);
      } else {
        const project = data[pos+1];
        projectDetailTemp(slide, project);
        slide.setAttribute('data-slide', project.name);
      }
  }
}


