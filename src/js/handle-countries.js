import populateDataListCountries from './populate-datalist-countries';

const handleCountries = (result) => {
  const countriesData = Array.from(result.data, (i) => i.country);
  const countries = new Set(countriesData);
  populateDataListCountries(countries);
};

export default handleCountries;
