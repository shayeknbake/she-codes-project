function displayTemperature(response) {
  let temperatureElement = document.quesrySelector("#temperature");
  let cityElement = document.quesrySelector("#city");
  let descriptionElement = document.quesrySelector("#description");
  let humidityElement = document.quesrySelector("#humidity");
  let windElement = document.quesrySelector("#wind");
  temperatureElement.innerHTML = math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.main.wind.speed;
}

let apiKey = "22e14d127bc8fa2686366e98abba50e0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(displayTemperature);
