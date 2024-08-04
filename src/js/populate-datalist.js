import newElement from './utils/new-element';

const dataList = document.querySelector('#countries');

const dataDataList = [];

const populateDatalist = (result) => {
  for (const country of result) {
    const option = newElement('option');
    option.value = country;

    dataList.appendChild(option);

    dataDataList.push(country);
  }
};

export default populateDatalist;

export { dataDataList };
