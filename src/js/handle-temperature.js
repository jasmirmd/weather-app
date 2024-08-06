import getCoordinates from './get-coordinates';
import { dataDataList } from './populate-datalist';

const country = document.querySelector('.country-name');
const temperature = document.querySelector('.temperature');
const searchBtn = document.querySelector('.search-btn');

window.addEventListener('keydown', async (event) => {
  if (event.key === 'Enter') {
    if (dataDataList.includes(country.value)) {
      try {
        const result = await getCoordinates(country.value);
        renderTemperature(result);
      } catch (error) {
        alert(error);
      }
    }
  }
});

searchBtn.addEventListener('click', async () => {
  if (dataDataList.includes(country.value)) {
    try {
      const result = await getCoordinates(country.value);
      renderTemperature(result);
    } catch (error) {
      alert(error);
    }
  }
});

const renderTemperature = (result) => {
  temperature.textContent = result.current.temperature_2m;
};
