function WeatherData() {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=23.899776&longitude=90.323082&current_weather=true"
  )
    .then((res) => res.json())
    .then((data) => {
      
        let forecast = data.current_weather;
        document.getElementById(
        "temperature"
      ).innerHTML = `${forecast.temperature}°C`;
      
      document.getElementById(
        "windSpeed"
      ).innerHTML = `${forecast.windspeed} km/h`;
      
      document.getElementById(
        "windDirection"
      ).innerHTML = `${forecast.winddirection}°`;
    });
}


