import getWeather from './get-weather';

const getCoordinates = async (country) => {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${country}`
    );
    const result = await response.json();
    const data = await getWeather(result);
    return data;
  } catch (error) {
    alert('Error fetching coordinates:', error);
  }
};

export default getCoordinates;
