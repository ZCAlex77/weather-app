import UI from './UI';

const weather = (() => {
  const apiKey = 'f46fa8417e7f5e44d9e30fbf014bc441';
  const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const geocodinUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  const imageUrl = ' http://openweathermap.org/img/wn/';
  let unit = 'metric';

  const getWeatherData = async (coords) => {
    const response = await fetch(
      `${weatherUrl}?lat=${coords.lat}&lon=${coords.lon}&units=${unit}&appid=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
    const temp = data.main.temp;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
    const image = `${imageUrl}${icon}@4x.png`;

    UI.createWeatherCard(temp, image, description);
  };

  const getCoords = async (city) => {
    try {
      const response = await fetch(`${geocodinUrl}?q=${city}&appid=${apiKey}`);
      const data = await response.json();
      const coords = { lat: data[0].lat, lon: data[0].lon };

      getWeatherData(coords);
    } catch (err) {
      console.log(err);
    }
  };

  return { getCoords };
})();

export default weather;
