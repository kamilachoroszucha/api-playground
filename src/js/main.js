"use strict";
const list = document.querySelector('.list--js')

fetch("https://api.github.com/users/kamilachoroszucha/repos?sort=created&direction=desc")
  .then(resp => resp.json())
  .then(resp => {
    for (const repo of resp) {
      const { name, html_url } = repo;

      list.innerHTML += `<li class="list__item" ><div class="list__item--title">${name.toUpperCase()}:</div> <div class="list__item--address"><a class="list__item--link" href="${html_url}">${html_url}</a></div></li>`;
  
    }
  })
  .catch(err =>
    console.log(err))



