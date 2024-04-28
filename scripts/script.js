// Elements
const $mainSection = document.querySelector('.section-main');
const $bikeList = document.querySelector('.list-bike');
const $bikeEl = document.querySelector('.bike');
const $totalPriceEl = document.getElementById('total-price');

const $selectedBikeBrandEl = document.querySelector('.selected-bike--brand');

// Accesories prices
const $sportPackPriceEl = document.querySelector('.sport-pack--price');
const $streetPackPriceEl = document.querySelector('.street-pack--price');
const $travelPackPriceEl = document.querySelector('.travel-pack--price');

// Buttons
const $btnSportPackAdd = document.querySelector('.btn-add--sport');
const $btnStreetPackAdd = document.querySelector('.btn-add--street');
const $btnTravelPackAdd = document.querySelector('.btn-add--travel');
const $btnSportPackRemove = document.querySelector('.btn-remove--sport');
const $btnStreetPackRemove = document.querySelector('.btn-remove--street');
const $btnTravelPackRemove = document.querySelector('.btn-remove--travel');
const $btnPurchase = document.querySelector('.btn-buy');

// Final section elements
const $finalSection = document.querySelector('.section-final');
const $finalImg = document.querySelector('.bike-img--final');

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
  },
  {
    brand: 'Triumph',
    model: 'Scrambler 1200 XE',
    year: 2022,
    power: 90,
    mileage: 2200,
    price: 65000,
    imgIndex: 1,
  },
  {
    brand: 'Kawasaki',
    model: 'Z 900 RS',
    year: 2020,
    power: 111,
    mileage: 2200,
    price: 62500,
    imgIndex: 2,
  },
  {
    brand: 'Ducati',
    model: 'Streetfighter V4',
    year: 2023,
    power: 208,
    mileage: 2200,
    price: 100000,
    imgIndex: 3,
  },
];

const accessories = {
  sportPackPrice: 10500,
  streetPackPrice: 7000,
  travelPackPrice: 6500,
};

const { sportPackPrice, streetPackPrice, travelPackPrice } = accessories;

// Variables
let $totalPrice;
let $selectedBike;

///
$sportPackPriceEl.textContent = `${sportPackPrice} PLN`;
$streetPackPriceEl.textContent = `${streetPackPrice} PLN`;
$travelPackPriceEl.textContent = `${travelPackPrice} PLN`;

// Buttons State
$btnSportPackAdd.disabled = false;
$btnStreetPackAdd.disabled = false;
$btnTravelPackAdd.disabled = false;
$btnSportPackRemove.disabled = false;
$btnStreetPackRemove.disabled = false;
$btnTravelPackRemove.disabled = false;

// Function to display list of bikes
function displayBikes(bikeList) {
  $bikeList.innerHTML = '';
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
    $bikeList.insertAdjacentHTML('beforeend', markup);
  });
}
displayBikes(bikeData);

// Cicked bike handler
const getBikeInfoOnClick = function (e) {
  const $clickedBike = e.target.closest('.bike');
  if ($clickedBike) {
    const bikeIndex = $clickedBike.dataset.index;
    const clickedBikeData = bikeData[bikeIndex];
    console.log(clickedBikeData);

    $totalPrice = clickedBikeData.price;
    $totalPriceEl.textContent = `${$totalPrice} PLN`;
    $selectedBike = clickedBikeData;
    console.log($selectedBike);
    $selectedBikeBrandEl.textContent = `${clickedBikeData.brand} ${clickedBikeData.model}`;
    $mainSection.classList.add('hidden');

    // Reset buttons
    $btnSportPackAdd.disabled = false;
    $btnStreetPackAdd.disabled = false;
    $btnTravelPackAdd.disabled = false;
    $btnSportPackRemove.disabled = true;
    $btnStreetPackRemove.disabled = true;
    $btnTravelPackRemove.disabled = true;
  }
};
$bikeList.addEventListener('click', getBikeInfoOnClick);

// Function to handle adding accessory price to total price
function addAccessoryPriceToTotalPrice(accessoryPrice, $btnAdd, $btnRemove) {
  if (!$totalPrice) return; // Return if no bike is selected

  $totalPrice += accessoryPrice;
  $totalPriceEl.textContent = `${$totalPrice} PLN`;

  $btnAdd.disabled = true;
  $btnRemove.disabled = false;

  $btnAdd.classList.add('hidden');
  $btnRemove.classList.remove('hidden');
}

// Event listeners for adding accessories to total price
$btnSportPackAdd.addEventListener('click', function (e) {
  e.preventDefault();
  addAccessoryPriceToTotalPrice(
    sportPackPrice,
    $btnSportPackAdd,
    $btnSportPackRemove
  );
});

$btnStreetPackAdd.addEventListener('click', function (e) {
  e.preventDefault();
  addAccessoryPriceToTotalPrice(
    streetPackPrice,
    $btnStreetPackAdd,
    $btnStreetPackRemove
  );
});

$btnTravelPackAdd.addEventListener('click', function (e) {
  e.preventDefault();
  addAccessoryPriceToTotalPrice(
    travelPackPrice,
    $btnTravelPackAdd,
    $btnTravelPackRemove
  );
});

// Function to handle removing accessory price from total price
function removeAccessoryPriceFromTotalPrice(
  accessoryPrice,
  $btnAdd,
  $btnRemove
) {
  if (!$totalPrice) return; // Return if no bike is selected

  $totalPrice -= accessoryPrice;
  $totalPriceEl.textContent = `${$totalPrice} PLN`;

  $btnAdd.disabled = false;
  $btnRemove.disabled = true;

  $btnAdd.classList.remove('hidden');
  $btnRemove.classList.add('hidden');
}

// Event listeners for removing accessories from total price
$btnSportPackRemove.addEventListener('click', function (e) {
  e.preventDefault();
  removeAccessoryPriceFromTotalPrice(
    sportPackPrice,
    $btnSportPackAdd,
    $btnSportPackRemove
  );
});

$btnStreetPackRemove.addEventListener('click', function (e) {
  e.preventDefault();
  removeAccessoryPriceFromTotalPrice(
    streetPackPrice,
    $btnStreetPackAdd,
    $btnStreetPackRemove
  );
});

$btnTravelPackRemove.addEventListener('click', function (e) {
  e.preventDefault();
  removeAccessoryPriceFromTotalPrice(
    travelPackPrice,
    $btnTravelPackAdd,
    $btnTravelPackRemove
  );
});

// form handling
$btnPurchase.addEventListener('click', function (e) {
  e.preventDefault();
  const html = `<img class="bike-img--final" src="assets/bike-${$selectedBike.imgIndex}.jpg" alt="bike photo" />
  <p class="thanking-text">Dziękujemy za zakup ${$selectedBike.brand} ${$selectedBike.model}</p>
  <p class="delivery-txt">Motocykl zostanie dostarczony 20/05/2024</p>`;

  $finalSection.insertAdjacentHTML('afterbegin', html);
});
