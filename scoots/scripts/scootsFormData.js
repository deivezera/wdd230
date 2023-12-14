
const scootsURL = "https://deivezera.github.io/wdd230/scoots/data/scoots.json";
const rentalType = document.getElementById("rentalType");

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
    let rental = document.createElement("option");
    rental.value = scoot.name;
    rental.innerHTML = scoot.name;
    rentalType.appendChild(rental);
  }); 
}

getscoots();