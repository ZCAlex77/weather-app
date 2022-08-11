const UI = (() => {
  const container = document.querySelector('#app');
  const iconUrl = ' http://openweathermap.org/img/wn/';

  const updateLocation = (newLocation) => {
    document.querySelector(
      '#cityName'
    ).textContent = `Weather in ${newLocation}`;
  };

  const createWeatherCard = ({
    temp,
    icon,
    description,
    humidity,
    clouds,
    windSpeed,
  }) => {
    document.querySelector('#icon').src = `${iconUrl}${icon}@4x.png`;
    document.querySelector('#temp').textContent = temp;
    document.querySelector('#description').textContent = description;
    document.querySelector('#humidity').textContent = `${humidity}%`;
    document.querySelector('#clouds').textContent = `${clouds}%`;
    document.querySelector('#wind').textContent = `${windSpeed} km/h`;
  };

  return { createWeatherCard, updateLocation };
})();

export default UI;
