"use strict";
fetch("https://api.github.com/users/kamilachoroszucha/repos")
  .then(resp => resp.json())
  .then(resp => {
    
    for(const repo of resp){
    console.log(`${repo.name}: ${repo.html_url}`)}
  })
  .catch(err=>
    console.log(err))



