import UI from './UI';

const weather = (() => {
  const apiKey = 'f46fa8417e7f5e44d9e30fbf014bc441';
  const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const geocodinUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  let unit = 'metric';

  const getWeatherData = async (coords) => {
    try {
      const response = await fetch(
        `${weatherUrl}?lat=${coords.lat}&lon=${coords.lon}&units=${unit}&appid=${apiKey}`
      );
      const data = await response.json();

      const displayData = {
        temp: data.main.temp,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        clouds: data.clouds.all,
        windSpeed: data.wind.speed,
      };

      UI.createWeatherCard(displayData);
    } catch (err) {
      console.log(err);
    }
  };

  const getCoords = async (city) => {
    try {
      const response = await fetch(`${geocodinUrl}?q=${city}&appid=${apiKey}`);
      const data = await response.json();
      const coords = { lat: data[0].lat, lon: data[0].lon };
      const name = data[0].name;

      UI.updateLocation(name);

      getWeatherData(coords);
    } catch (err) {
      console.log(err);
    }
  };

  const getWeather = (city) => {
    getCoords(city);
  };

  return { getWeather };
})();

export default weather;
