// Selecting DOM elements
const header = document.querySelector('.header');
const headerTitle = document.querySelector('.header__title');
const headerInput = document.querySelector('.header__input');

const main = document.querySelector('.main');
const listBike = document.querySelector('.list__bike');
const bikeImg = document.querySelector('.bike__img');
const bikeName = document.querySelector('.bike__description--name');
const bikePrice = document.querySelector('.bike__description--price');

const selectedBikeContainer = document.querySelector(
  '.selected-bike__container'
);
const selectedBikeName = document.querySelector('.selected-bike__name');
const selectedBikePrice = document.querySelector('.selected-bike__price');
const sportPackPrice = document.querySelector('.sport-pack__price');
const weekendPackPrice = document.querySelector('.weekend-pack__price');
const streetPackPrice = document.querySelector('.street-pack__price');

const accessoriesContainer = document.querySelector('.accessories-container');
const accessoriesTitle = document.querySelector('.accessories__title');
const accessoriesSport = document.querySelector('.accessories__sport');
const accessoriesStreet = document.querySelector('.accessories__street');
const accessoriesTravel = document.querySelector('.accessories__travel');
const accessoriesName = document.querySelectorAll('.accessories__name');
const accessoriesList = document.querySelectorAll('.accessories__list');
const accessoriesItem = document.querySelectorAll('.accessories__item');
const accessoriesPrice = document.querySelectorAll('.accessories__price');

const buyerTitle = document.querySelector('.buyer-title');
const form = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const destinationInput = document.querySelector('#destination');
const dateInput = document.querySelector('#date');
const pricing = document.querySelector('.pricing');
const leasingRadio = document.querySelector('#leasing');
const cashRadio = document.querySelector('#cash');

const backButton = document.querySelector('.btn__back');
const buyButton = document.querySelector('.btn__buy');

const finalSection = document.querySelector('.section-final');
const finalBikeImg = document.querySelector('.bike__img');
const thankingText = document.querySelector('.thanking-text');
const deliveryText = document.querySelector('.delivery-txt');
const mainPageButton = document.querySelector('.btn__main-page');

// Bike data
const bikeData = [
  {
    brand: 'Yamaha',
    model: 'XSR 900',
    year: 2022,
    power: 117,
    mileage: 2200,
    price: 52000,
    imgIndex: 0,
    accessories: {
      sportPack: 1500,
      streetPack: 2000,
      weekendPack: 3000,
    },
  },
  {
    brand: 'Triumph',
    model: 'Scrambler 1200 XE',
    year: 2022,
    power: 90,
    mileage: 2200,
    price: 65000,
    imgIndex: 1,
    accessories: {
      sportPack: 4500,
      streetPack: 5000,
      weekendPack: 6000,
    },
  },
  {
    brand: 'Kawasaki',
    model: 'Z 900 RS',
    year: 2020,
    power: 111,
    mileage: 2200,
    price: 62500,
    imgIndex: 2,
    accessories: {
      sportPack: 7500,
      streetPack: 8000,
      weekendPack: 9000,
    },
  },
  {
    brand: 'Ducati',
    model: 'Streetfighter V4',
    year: 2023,
    power: 208,
    mileage: 2200,
    price: 100000,
    imgIndex: 3,
    accessories: {
      sportPack: 10500,
      streetPack: 11000,
      weekendPack: 12000,
    },
  },
];

// Function to display list of bikes
function displayBikes(bikeList) {
  listBike.innerHTML = '';
  bikeList.forEach((bike, index) => {
    const markup = `
      <li class="bike" data-index="${index}">
        <img
          class="bike__img"
          src="assets/bike-${bike.imgIndex}.jpg"
          alt="${bike.brand} ${bike.model}"
        />
        <div class="bike__description">
          <p class="bike__description--name">${bike.brand} ${bike.model}</p>
          <div class="bike__description--stats">
            <p class="bike__description--year">${bike.year}</p>
            <p class="bike__description--mileage">${bike.mileage} km</p>
            <p class="bike__description--power">${bike.power} KM</p>
          </div>
          <p class="bike__description--price">${bike.price} PLN</p>
        </div>
      </li>
    `;
    listBike.insertAdjacentHTML('beforeend', markup);
  });
}

// Display all bikes initially
displayBikes(bikeData);

const bikeFilter = function () {
  const query = headerInput.value.toLowerCase();

  const filteredBikes = bikeData.filter(bike =>
    bike.brand.toLowerCase().includes(query)
  );

  return filteredBikes;
};

// Add click event listener to each bike
listBike.addEventListener('click', function (event) {
  const clickedBike = event.target.closest('.bike');
  if (!clickedBike) return;

  // Pobranie indeksu klikniętego roweru
  const index = clickedBike.dataset.index;

  // Pobranie danych klikniętego roweru z tablicy bikeData
  const selectedBike = bikeFilter()[index];

  // Przykładowe wykorzystanie danych klikniętego roweru
  console.log(selectedBike.brand);
  console.log(selectedBike.model);
  console.log(selectedBike.price);

  displaySelectedbike(selectedBike);
});

// Event listener on searchbar
headerInput.addEventListener('input', function () {
  displayBikes(bikeFilter());
});

// Adding values of selected bike to buing section
const displaySelectedbike = function (bike) {
  selectedBikeName.textContent = `Wybrany motocykl: ${bike.brand} ${bike.model}`;
  selectedBikePrice.textContent = `${bike.price} PLN`;
  sportPackPrice.textContent = `${bike.accessories.sportPack} PLN`;
  weekendPackPrice.textContent = `${bike.accessories.weekendPack} PLN`;
  streetPackPrice.textContent = `${bike.accessories.streetPack} PLN`;
};