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

let apiKey = "932fota4afb850a2171c8773fb965c10";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
