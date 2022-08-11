import './style/main.scss';
import weather from './modules/weather';

const app = (() => {
  const container = document.querySelector('#app');
  weather.getCoords('Iasi');
})();
