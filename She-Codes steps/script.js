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
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=NewYork&key=${apiKey}&units=metric`;

https: axios.get(apiUrl).then(displayTemperature);
