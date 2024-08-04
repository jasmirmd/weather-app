import handleCities from './handle-cities';
import handleCountries from './handle-countries';

const getCountriesAndCities = async () => {
  try {
    const response = await fetch(
      'https://countriesnow.space/api/v0.1/countries/population/cities'
    );
    const result = await response.json();
    handleCountries(result);
    handleCities(result);
  } catch (error) {
    console.log(error);
  }
};

getCountriesAndCities();
