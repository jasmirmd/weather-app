const changeLocationBtn = document.querySelector('#change-location-btn');
const locationForm = document.querySelector('#location-form');

const locationFormCancelBtn = document.querySelector(
  '#location-form-cancel-btn'
);

const locationFormSearchBtn = document.querySelector(
  '#location-form-search-btn'
);

const state = {
  state: false,
  toggleState() {
    this.state = !this.state;
  }
};

const checkState = () => {
  const isHidden = state.state;

  locationForm.classList.toggle('hidden', !isHidden);
  locationForm.classList.toggle('flex', isHidden);
  changeLocationBtn.classList.toggle('hidden', isHidden);
  changeLocationBtn.classList.toggle('flex', !isHidden);
};

for (const element of [changeLocationBtn, locationFormCancelBtn]) {
  element.addEventListener('click', () => {
    state.toggleState();
    checkState();
  });
}

locationFormSearchBtn.addEventListener('click', () => {
  state.toggleState();
  checkState();
});
