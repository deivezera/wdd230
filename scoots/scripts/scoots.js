const scootsURL = "https://deivezera.github.io/wdd230/scoots/data/scoots.json";
const scootsList = document.getElementById("scootsList");

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

async function getscoots() {
  const response = await fetch(scootsURL);
  const data = await response.json();
  displayscoots(data.scoots);
}

function displayscoots(data){
  data.forEach((scoot) => {

      let card = document.createElement('div');

      let logo = document.createElement('img');
      logo.setAttribute("src", scoot.image);
      logo.setAttribute("alt", scoot.name);
      logo.setAttribute("width", "300px");
      logo.setAttribute("height", "182px");

      card.appendChild(logo)

      let name = document.createElement('p');
      name.innerHTML = scoot.name
      name.classList.add("name");
      card.appendChild(name);

      let maxPersons = document.createElement('p');
      maxPersons.innerHTML = 'Max persons: ' + scoot.maxPersons
      maxPersons.classList.add("maxPersons");
      card.appendChild(maxPersons);

      let reservationsTitle = document.createElement('p');
      reservationsTitle.innerHTML = 'Reservations'
      let reservations = document.createElement('aside');
      scoot.reservations.forEach((item) => {
        let priceHalf = document.createElement('p')
        let priceFull = document.createElement('p')
        priceHalf.innerHTML = 'Half day: ' + formatter.format(item.half)
        priceFull.innerHTML = 'Full day: ' + formatter.format(item.full)
        reservations.appendChild(priceHalf)
        reservations.appendChild(priceFull)

      })
      reservations.classList.add("reservations");
      card.appendChild(reservationsTitle);
      card.appendChild(reservations);

      let walkinTitle = document.createElement('p');
      walkinTitle.innerHTML = 'Walk-in'
      let walkin = document.createElement('aside');
      scoot.walkin.forEach((item) => {
        let priceHalf = document.createElement('p')
        let priceFull = document.createElement('p')
        priceHalf.innerHTML = 'Half day: ' + formatter.format(item.half)
        priceFull.innerHTML = 'Full day: ' + formatter.format(item.full)

        walkin.appendChild(priceHalf)
        walkin.appendChild(priceFull)
      })
      walkin.classList.add("walkin");
      card.appendChild(walkinTitle);
      card.appendChild(walkin);
      



      scootsList.appendChild(card);
  }); 
}

getscoots();