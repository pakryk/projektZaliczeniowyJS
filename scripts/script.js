// Selecting DOM elements
const header = document.querySelector('.header');
const headerTitle = document.querySelector('.header__title');
const headerInput = document.querySelector('.header__input');

const main = document.querySelector('.main');
const listBike = document.querySelector('.list__bike');
const bike = document.querySelector('.bike');
const bikeImg = document.querySelector('.bike__img');
const bikeDescription = document.querySelector('.bike__description');
const bikeName = document.querySelector('.bike__description--name');
const bikePrice = document.querySelector('.bike__description--price');

const selectedBikeContainer = document.querySelector('.selected-bike__container');
const selectedBikeName = document.querySelector('.selected-bike__name');
const selectedBikePrice = document.querySelector('.selected-bike__price');

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
      sportPack: 7500,
      streetPack: 5000,
      weekendPack: 6000
    }
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
      sportPack: 7500,
      streetPack: 5000,
      weekendPack: 6000
    }
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
      streetPack: 5000,
      weekendPack: 6000
    }
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
      sportPack: 7500,
      streetPack: 5000,
      weekendPack: 6000
    }
  },
];

// Function to display list of bikes

  // Add click event listener to each bike
 

// Function to filter bikes based on search text

// Event listener on searchbar


// Display all bikes initially

