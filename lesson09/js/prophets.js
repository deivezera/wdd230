const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let fullName = document.createElement('__'); 
    let portrait = document.createElement('img');

    fullName.textContent = `${prophet._____} ____________`; 

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.____} ______________`); 
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    card.appendChild(portrait);

    cards.appendChild(card);
  }); 
}
getProphetData(url);