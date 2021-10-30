const apiKey = "2712c1de993b4b1d8693f8875fda4472";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    });
}

function onGeoError() {
  alert("I can't get your geolocation. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
