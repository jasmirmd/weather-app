import newElement from './utils/new-element';

const dataList = document.getElementById('countries-cities');

const populateDataListCountries = (result) => {
  const arrResult = Array.from(result);

  const filterNumbers = new RegExp(/\D/, 'gi');
  const filterParenthesis = new RegExp(/\([^()]*\)/, 'g');
  const filterUnknown = new RegExp(/footnoteSeqID/);

  const countries = arrResult
    .filter((i) => i.match(filterNumbers))
    .filter((i) => !i.match(filterUnknown))
    .map((i) => i.replace(filterParenthesis, ''));

  for (const country of countries) {
    const option = newElement('option');
    option.value = country;

    dataList.appendChild(option);
  }
};

export default populateDataListCountries;
