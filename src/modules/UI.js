const UI = (() => {
  const container = document.querySelector('#app');

  const updateLocation = (newLocation) => {
    document.querySelector(
      '#cityName'
    ).textContent = `Weather in ${newLocation}`;
  };

  const createWeatherCard = (temp, imgUrl, description) => {
    const card = document.createElement('div'),
      img = document.createElement('img'),
      p = document.createElement('p'),
      p2 = document.createElement('p');

    img.src = imgUrl;
    p.innerHTML = `${temp} <sup>o</sup>C`;
    p2.textContent = description;

    card.className = 'card';
    card.append(img, p, p2);

    document.querySelector('.card')?.remove();
    container.appendChild(card);
  };

  return { createWeatherCard, updateLocation };
})();

export default UI;
