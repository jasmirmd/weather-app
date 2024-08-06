const getWeather = async (result) => {
  const latitude = result.results[0].latitude;
  const longitude = result.results[0].longitude;

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    alert('Error fetching weather data:', error);
  }
};

export default getWeather;
