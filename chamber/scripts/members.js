const membersURL = "http://127.0.0.1:5500//chamber/data/members.json";
const membersList = document.getElementById("membersList");
async function getMembers() {
  const response = await fetch(membersURL);
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(data){
  data.forEach((member) => {

      let card = document.createElement('div');

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


      membersList.appendChild(card);
  }); 
}

getMembers();


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#membersList");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid_members");
	display.classList.remove("list_members");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list_members");
	display.classList.remove("grid_members");
}
