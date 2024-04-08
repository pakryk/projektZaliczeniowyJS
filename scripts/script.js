// ------VARIABLES
//--main-section-variables
const mainSection = document.querySelector('.main');
const bikesContainer = document.querySelector('.bikes__container');

//--pricing-section-variables
const sectionPricing = document.querySelector('.section-pricing');
const selectedBike = document.querySelector('.selected-bike__span');
const totalPrice = document.querySelector('.total-price');

const sportPackPrice = document.querySelector('.sport-pack__price');
const streetPackPrice = document.querySelector('.street-pack__price');
const weekendPackPrice = document.querySelector('.weekend-pack__price');

// bikes list
const bikeData = [
  {
    brand: 'Yamaha',
    model: 'XSR 900',
    year: 2022,
    power: 117,
    milleage: 2200,
    price: 52000,
    accesories: {
      sportPack: 7500,
      streetPack: 5000,
      weekendPack: 6000,
    },
  },
  {
    brand: 'Triumph',
    model: 'Scrambler 1200 XE',
    year: 2022,
    power: 90,
    milleage: 2200,
    price: 65000,
    accesories: {
      sportPack: 7500,
      streetPack: 5000,
      weekendPack: 6000,
    },
  },
  {
    brand: 'Kawasaki',
    model: 'Z 900 RS',
    year: 2020,
    power: 111,
    milleage: 2200,
    price: 62500,
    accesories: {
      sportPack: 7500,
      streetPack: 5000,
      weekendPack: 6000,
    },
  },
  {
    brand: 'Ducati',
    model: 'Streetfighter V4',
    year: 2023,
    power: 208,
    milleage: 2200,
    price: 100000,
    accesories: {
      sportPack: 7500,
      streetPack: 5000,
      weekendPack: 6000,
    },
  },
];

// display list of bikes
displayBikes = function displayBikes(bikesData) {
  bikesContainer.innerHTML = '';

  bikesData.forEach(function (bike, i) {
    const html = `
      <div class="bike">
        <img class="bike__img" src="assets/bike-${i}.jpg" alt="" />
        <p class="bike__description bike__description--price">${bike.price} PLN</p>
        <p class="bike__description bike__description--title">${bike.brand} ${bike.model}</p>
        <div class="bike__spec">
          <p class="bike__description bike__description--year">${bike.year}</p>
          <p class="bike__description bike__description--power">${bike.power} KM</p>
          <p class="bike__description bike__description--mileage">${bike.milleage} km</p>
        </div>
      </div>`;
    bikesContainer.insertAdjacentHTML('beforeend', html);
  });
};
displayBikes(bikeData);

//listener on bike
//listener on bike
const bikes = document.querySelectorAll('.bike');
bikes.forEach(function (bike, index) {
  bike.addEventListener('click', function () {
    // selected bike data based on its index
    const selectedBikeData = bikeData[index];
    console.log(selectedBikeData);

    // Checking if bike data was found
    if (selectedBikeData) {
      const totalPriceValue = selectedBikeData.price;

      // update pricing section with selectedBikeData
      mainSection.classList.add('hidden');
      sectionPricing.classList.remove('hidden');
      selectedBike.textContent = `${selectedBikeData.brand} ${selectedBikeData.model}`;
      totalPrice.textContent = `${totalPriceValue} PLN`;
      sportPackPrice.textContent = `${selectedBikeData.accesories.sportPack} PLN`
      streetPackPrice.textContent = `${selectedBikeData.accesories.streetPack} PLN`
      weekendPackPrice.textContent = `${selectedBikeData.accesories.weekendPack} PLN`
    } else {
      console.error('Nie znaleziono danych dla wybranego roweru.');
    }
  });
});




