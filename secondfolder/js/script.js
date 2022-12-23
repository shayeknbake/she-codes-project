function searchLocation(position) {
  let apiKey = "932fota4afb850a2171c8773fb965c10";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(locationWeather);
}
