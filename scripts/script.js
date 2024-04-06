const bikesContainer = document.querySelector('.bikes__container');

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
        <p class="bike__description bike__description--price">${bike.price}</p>
        <p class="bike__description bike__description--title">${bike.brand} ${bike.model}</p>
        <div class="bike__spec">
          <p class="bike__description bike__description--year">${bike.year}</p>
          <p class="bike__description bike__description--power">${bike.power}</p>
          <p class="bike__description bike__description--mileage">${bike.milleage}</p>
        </div>
      </div>`;

    bikesContainer.insertAdjacentHTML('beforeend', html);
  });
};
displayBikes(bikeData);

//listener on bike
const bikes = document.querySelectorAll('.bike');
bikes.forEach(function (bike) {
  bike.addEventListener('click', function () {
    bike.style.backgroundColor = 'red';
    console.log('click');
  });
});
