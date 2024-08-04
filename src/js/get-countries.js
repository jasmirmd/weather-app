import handleCountries from './handle-countries';

const getCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const result = await response.json();
    handleCountries(result);
  } catch (error) {
    console.log(error);
  }
};

getCountries();
