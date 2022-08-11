const UI = (() => {
  const container = document.querySelector('#app');
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
    container.appendChild(card);
  };

  return { createWeatherCard };
})();

export default UI;
