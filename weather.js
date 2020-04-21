const weather = document.querySelector(".js-weather");
const weatherIcon = weather.querySelector("img");
const weatherInfo = weather.querySelector("h3");
const API_KEY = "640cc2537227e204510f1fd7b145442d";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      console.log(json.weather[0].icon);
      const temperature = json.main.temp;
      const place = json.name;
      const Icon = json.weather[0].icon;
      weatherIcon.src = `https://openweathermap.org/img/wn/${Icon}@2x.png`;
      weatherInfo.innerHTML = `<span>${temperature}℃</span> <span>${place}</span>`;
    });
}
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}
function handleGeoError() {
  console.log(`Cant access geo location`);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    console.log(parsedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
