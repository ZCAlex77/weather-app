import './style/main.scss';
import weather from './modules/weather';

const app = (() => {
  document.querySelector('#searchCity').onsubmit = function (ev) {
    ev.preventDefault();
    const city = this.city.value;
    weather.getWeather(city);
    this.reset();
  };

  weather.getWeather('Iasi');
})();
