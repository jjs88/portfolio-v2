export function projectDetailTemp(ele, {name, img, title, tech, desc, demoLink, code}) {
  const temp = `
    <div class="project-detail">
      <div class="project-detail__img">
        <img src="${img}" />
      </div>
      <div class="project-detail__content">
        <h1 class="project-title">${title}</h1>
        <p class="project-tech">${tech}</p>
        <p class="project-desc">${desc}</p>
        <div class="project-links">
          <div class="link-item">
            <span class="fas fa-laptop"></span>
            <a href="${demoLink}" target="_blank">Demo</a>
          </div>
          <div class="link-item">
            <span class="fas fa-code"></span>
            <a href="${code}" target="_blank">Code</a>
          </div>
        </div>
      </div>
    </div>`;
    ele.innerHTML = temp;
}

export function thumbTemp(ele, {name, img}) {
  // console.log(img);
  const temp = `
    <div class="project-thumb" data-id="${name}">
      <img src="${img}" class="thumb-img" />
    </div>`;

  ele.innerHTML += temp;
}