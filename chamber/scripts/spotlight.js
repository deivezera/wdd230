const membersURL = "https://deivezera.github.io/wdd230/chamber/data/members.json";
const events = document.getElementById("events_container");
async function getMembers() {
  const response = await fetch(membersURL);
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(data){
  data
    .filter((member) => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver')
    .sort(function(){ return 0.5 - Math.random() })
    .slice(0,3)
    .forEach((member) => {

      let card = document.createElement('div');
      card.classList.add("card")

      let logo = document.createElement('img');
      logo.setAttribute("src", member.image);
      logo.setAttribute("alt", member.name);
      logo.setAttribute("width", "300px");
      logo.setAttribute("height", "182px");

      card.appendChild(logo)

      let name = document.createElement('p');
      name.innerHTML = member.name
      name.classList.add("name");
      card.appendChild(name);

      let address = document.createElement('p');
      address.innerHTML = member.address
      address.classList.add("address");
      card.appendChild(address);

      let phone = document.createElement('p');
      phone.innerHTML = member.phone;
      phone.classList.add("phone");
      card.appendChild(phone);

      let website = document.createElement('a');
      website.innerHTML = member.website;
      website.setAttribute("href" , member.website);
      website.setAttribute("target", "_blank");
      website.classList.add("website");
      card.appendChild(website);


      events.appendChild(card);
  }); 
}

getMembers();