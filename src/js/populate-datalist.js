import newElement from './utils/new-element';

const dataList = document.getElementById('countries');

const populateDatalist = (result) => {
  for (const country of result) {
    const option = newElement('option');
    option.value = country;

    dataList.appendChild(option);
  }
};

export default populateDatalist;
