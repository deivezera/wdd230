const baseURL = "https://deivezera.github.io/wdd230/";
const linksURL = "https://deivezera.github.io/wdd230/data/links.json";
const learning = document.getElementById("learning");
async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
}

function displayLinks(weeks){
  weeks.forEach((week) => {
    week.links.forEach((link) => {
      let li = document.createElement('li');
      let a = document.createElement('a'); 
  
      a.setAttribute('href', link.url)
      a.innerHTML = link.title
  
      li.appendChild(a);
  
      learning.appendChild(li);
    })
  }); 
}

getLinks();