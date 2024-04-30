// Main section elements
const $mainSection = document.querySelector('.section-main');
const $formSection = document.querySelector('.section-form');
const $bikeList = document.querySelector('.list-bike');
const $bikeEl = document.querySelector('.bike');
const $totalPrice = document.getElementById('total-price');
const $selectedBikeBrand = document.querySelector('.selected-bike--brand');
const $searchbar = document.querySelector('.header-input');

// Accessories prices
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
const $btnBack = document.querySelector('.btn-back');

// Form section elements
const $nameInput = document.getElementById('name');
const $destinationInput = document.getElementById('destination');
const $dateInput = document.getElementById('date');
const $error = document.querySelector('.error');

// Final section elements
const $finalSection = document.querySelector('.section-final');
const $finalImg = document.querySelector('.bike-img--final');
const $thankingText = document.querySelector('.thanking-text');
const $deliveryText = document.querySelector('.delivery-txt');
const $totalPriceFinal = document.querySelector('.total-price--final');
const $payingMethodFinal = document.querySelector('.paying-method');

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

let filteredBikeData = bikeData; // To przechowuje aktualnie wyfiltrowane dane

const accessories = {
  sportPackPrice: 10500,
  streetPackPrice: 7000,
  travelPackPrice: 6500,
};

const { sportPackPrice, streetPackPrice, travelPackPrice } = accessories;

// Variables
let totalPrice;
let selectedBike;

// Accessories prices
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
          class="bike-img"
          src="assets/bike-${bike.imgIndex}.jpg"
          alt="${bike.brand} ${bike.model}"
        />
        <div class="bike-description">
          <p class="bike-description--name">${bike.brand} ${bike.model}</p>
          <div class="bike-description--stats">
            <p class="bike-description--year">${bike.year}</p>
            <p class="bike-description--mileage">${bike.mileage} km</p>
            <p class="bike-description--power">${bike.power} KM</p>
          </div>
          <p class="bike-description--price">${bike.price} PLN</p>
        </div>
      </li>`;
    $bikeList.insertAdjacentHTML('beforeend', markup);
  });
}
displayBikes(bikeData);

// Search bar implementation
function searchFunction() {
  let search = this.value.toLowerCase();

  filteredBikeData = bikeData.filter(bike =>
    bike.brand.toLowerCase().includes(search)
  );

  displayBikes(filteredBikeData);
}

$searchbar.addEventListener('input', searchFunction);

// Clicked bike handler
function getBikeInfoOnClick(e) {
  const $clickedBike = e.target.closest('.bike');
  if ($clickedBike) {
    const bikeIndex = $clickedBike.dataset.index;
    const clickedBikeData = filteredBikeData[bikeIndex]; // zmiana bikeData na filteredBikeData

    totalPrice = clickedBikeData.price;
    $totalPrice.textContent = `${totalPrice} PLN`;
    selectedBike = clickedBikeData;
    $selectedBikeBrand.textContent = `${clickedBikeData.brand} ${clickedBikeData.model}`;
    $mainSection.classList.add('hidden');
    $formSection.classList.remove('hidden');

    // Reset buttons
    resetButtons();
  }
}
$bikeList.addEventListener('click', getBikeInfoOnClick);

// Function to handle adding accessory price to total price
function addAccessoryPriceToTotalPrice(accessoryPrice, $btnAdd, $btnRemove) {
  if (!totalPrice) return; // Return if no bike is selected

  totalPrice += accessoryPrice;
  $totalPrice.textContent = `${totalPrice} PLN`;

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
  if (!totalPrice) return; // Return if no bike is selected

  totalPrice -= accessoryPrice;
  $totalPrice.textContent = `${totalPrice} PLN`;

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

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  // Elements
  const $paymentMethod = document.querySelector(
    'input[name="paymentMethod"]:checked'
  );
  // Clear previous errors
  $error.textContent = '';

  // Validating name input
  const nameValue = $nameInput.value.trim().split(' ');
  const nameRegex = /^[a-zA-Z]+$/;

  if (nameValue.length < 2 || !nameValue.every(name => nameRegex.test(name))) {
    showError(
      $nameInput,
      'Imię i nazwisko muszą zawierać przynajmniej dwa oddzielne słowa oraz nie mogą zawierać znaków specjalnych oraz cyfr.'
    );
    return;
  }

  // Validating destination input
  const destinationValue = $destinationInput.value.trim();
  if (!destinationValue) {
    showError($destinationInput, 'To pole jest wymagane.');
    return;
  }

  // Validating date input
  const currentDate = new Date();
  const selectedDate = new Date($dateInput.value);
  const daysDifference = Math.ceil(
    (selectedDate - currentDate) / (1000 * 60 * 60 * 24)
  );
  if (daysDifference < 0 || daysDifference > 14) {
    showError($dateInput, 'Data dostawy musi być w ciągu najbliższych 14 dni.');
    return;
  }

  // Displaying confirmation
  $formSection.classList.add('hidden');
  $finalSection.classList.remove('hidden');
  $finalImg.src = `assets/bike-${selectedBike.imgIndex}.jpg`;
  $thankingText.textContent = `Dziękujemy za zakup ${selectedBike.brand} ${selectedBike.model}`;
  $deliveryText.textContent = `Motocykl zostanie dostarczony ${selectedDate.toLocaleDateString()}`;
  $totalPriceFinal.textContent = `Cena całkowita za zakup: ${totalPrice} PLN`;
  $payingMethodFinal.textContent = `wybrana forma płatności: ${$paymentMethod.value}`;

  // Reset form
  resetForm();
}

// Event listener for form submission
document.querySelector('form').addEventListener('submit', handleSubmit);

// Function to show error
function showError(input, message) {
  let errorEl = input.nextElementSibling;
  if (!errorEl) {
    errorEl = document.createElement('p');
    errorEl.className = 'error';
    input.parentNode.appendChild(errorEl);
  }
  errorEl.textContent = message;
}

// Function to hide error
function hideError(input) {
  const errorEl = input.nextElementSibling;
  if (errorEl) {
    errorEl.textContent = '';
  }
}

// Event listener for back button
$btnBack.addEventListener('click', function () {
  $finalSection.classList.add('hidden');
  $formSection.classList.add('hidden');
  $mainSection.classList.remove('hidden');
});

// Function to reset form
function resetForm() {
  resetButtons();
  $nameInput.value = '';
  $destinationInput.value = '';
  $dateInput.value = '';
  document.getElementById('cash').checked = false;
  document.getElementById('leasing').checked = false;
  $error.textContent = '';
}

// Function to reset buttons
function resetButtons() {
  $btnSportPackAdd.disabled = false;
  $btnStreetPackAdd.disabled = false;
  $btnTravelPackAdd.disabled = false;
  $btnSportPackRemove.disabled = false;
  $btnStreetPackRemove.disabled = false;
  $btnTravelPackRemove.disabled = false;

  $btnSportPackAdd.classList.remove('hidden');
  $btnStreetPackAdd.classList.remove('hidden');
  $btnTravelPackAdd.classList.remove('hidden');
  $btnSportPackRemove.classList.add('hidden');
  $btnStreetPackRemove.classList.add('hidden');
  $btnTravelPackRemove.classList.add('hidden');
}
