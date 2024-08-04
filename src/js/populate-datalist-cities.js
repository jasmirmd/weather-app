import newElement from './utils/new-element';

const dataList = document.getElementById('countries-cities');

const populateDataListCities = (result) => {
  const arrResult = Array.from(result.data);

  const filterNumbers = new RegExp(/\D/, 'gi');
  const filterUnknown = new RegExp(/footnoteSeqID/);
  const filterParenthesis = new RegExp(/\([^()]*\)/, 'g');

  const countriesAndCities = arrResult
    .filter((i) => i.country.match(filterNumbers))
    .filter((i) => !i.country.match(filterUnknown))
    .filter((i) => !i.country.match(filterParenthesis));

  for (const item of countriesAndCities) {
    const option = newElement('option');
    option.value = `${item.country}, ${item.city}`;

    dataList.appendChild(option);
  }
};

export default populateDataListCities;
