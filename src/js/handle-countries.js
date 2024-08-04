import populateDatalist from './populate-datalist';

const handleCountries = (result) => {
  const countries = Array.from(result, (i) => i.name.common);
  populateDatalist(countries);
};

export default handleCountries;
