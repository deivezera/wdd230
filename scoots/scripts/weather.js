const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?`
const weatherId = document.getElementById("weatherId");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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

  let weatherDescription = document.createElement('p');
  weatherDescription.innerHTML = `${capitalizeFirstLetter(data.weather[0].description)}`
  weatherId.appendChild(weatherDescription)

  getForecast(forecastUrl, lat, lon)
}

const getForecast = async (url, lat, lon)  => {
  const response = await fetch(url + `lat=${lat}&lon=${lon}&appid=478e9aabd0ecdd85f02732bb1bd8416a&units=imperial`);
  const data = await response.json();
  const threeDayForecast = data.list.filter((item, index) => [8,16,24].includes(index))
  threeDayForecast.forEach((item, index) => {
    let forecastText = document.createElement('p');
    forecastText.innerHTML = `${new Date(item.dt_txt).toLocaleString().split(',')[0]} ${item.main.temp.toFixed(0)}ºF - ${item.weather[0].main}`
    weatherId.appendChild(forecastText)
  })
}

getWeather(weatherUrl, 20.507404647124215, -86.9539315018571)





