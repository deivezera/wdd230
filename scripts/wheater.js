const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?`;
const weatherId = document.getElementById("weatherId");

const getWeather = async (url, lat, lon) => {
  const response = await fetch(url + `lat=${lat}&lon=${lon}&appid=478e9aabd0ecdd85f02732bb1bd8416a&units=imperial`);
  const data = await response.json();
  
  var iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  
  let logo = document.createElement('img');
  logo.setAttribute("src", iconurl)
  logo.setAttribute("alt", data.weather[0].description)
  
  weatherId.appendChild(logo)
  let weatherText = document.createElement('p');
  weatherText.innerHTML = `${data.main.temp.toFixed(0)}ºF - ${data.weather[0].main}`
  weatherId.appendChild(weatherText)

  
}
const successCallback = (position) => {
  getWeather(weatherUrl, position.coords.latitude, position.coords.longitude)
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);



