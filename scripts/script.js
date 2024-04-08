// ------VARIABLES
//--main-section-variables
const mainSection = document.querySelector('.main');
const bikesContainer = document.querySelector('.bikes__container');
const searchbar = document.querySelector('.searchbar');

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
    imgIndex: 0,
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
    imgIndex: 1,
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
    imgIndex: 2,
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
    imgIndex: 3,
    accesories: {
      sportPack: 7500,
      streetPack: 5000,
      weekendPack: 6000,
    },
  },
];

// display list of bikes function
displayBikes = function displayBikes(bikesData) {
  bikesContainer.innerHTML = '';

  bikesData.forEach(function (bike, i) {
    const html = `
      <div class="bike">
        <img class="bike__img" src="assets/bike-${bike.imgIndex}.jpg" alt="" />
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

// updating pricing section depends on which bike was selected
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
      sportPackPrice.textContent = `${selectedBikeData.accesories.sportPack} PLN`;
      streetPackPrice.textContent = `${selectedBikeData.accesories.streetPack} PLN`;
      weekendPackPrice.textContent = `${selectedBikeData.accesories.weekendPack} PLN`;
    }
  });
});

// searchbar filter function
function searchBikes(searchText) {
  // converting text to lowercase
  const query = searchText.toLowerCase();

  // filter method on bikeData arr
  const filteredBikes = bikeData.filter(bike => {
    const brand = bike.brand.toLowerCase();
    return brand.includes(query)
  });

  // Display only filtered bikes
  displayBikes(filteredBikes);
}

// Listener on searchbar
searchbar.addEventListener('input', function(event) {
  const searchText = event.target.value;
  searchBikes(searchText);
});