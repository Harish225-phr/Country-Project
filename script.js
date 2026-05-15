const row = document.querySelector('.row');
const templateCard = document.querySelector('.Allcards');

const modeChange = document.querySelector('.mode-change');
const favIcon = document.querySelector('.fav-icon');
const modeText = document.querySelector('.mode-text');
const body = document.querySelector('body');

const dropDown = document.querySelector('.dropdown-menu');

const searchInput = document.querySelector('.searchInput');


let allCountries = [];

// ================= FETCH COUNTRIES =================
fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
  .then(res => res.json())
  .then(data => {
    allCountries = data;
    renderCountries(allCountries);
    buildDropdown(allCountries);
  })

// ================= RENDER COUNTRIES =================
function renderCountries(data) {
  row.innerHTML = ''; // clear old cards

  data.forEach(country => {
    let cloneCard = templateCard.cloneNode(true);

    cloneCard.style.display = "block"; // in case template is hidden
    cloneCard.classList.remove('Allcards');

    cloneCard.querySelector('.card-img-top').src = country.flags.png;
    cloneCard.querySelector('.country-name').innerText = country.name.common;
    cloneCard.querySelector('.country-population').innerText =
      country.population.toLocaleString();
    cloneCard.querySelector('.country-region').innerText = country.region;
    cloneCard.querySelector('.country-capital').innerText =
      country.capital ? country.capital[0] : 'No Capital';

    cloneCard.addEventListener('click', () => {
      window.location.href =
        `card.html?name=${country.name.common}` +
        `&img=${country.flags.png}` +
        `&population=${country.population.toLocaleString()}` +
        `&region=${country.region}` +
        `&capital=${country.capital ? country.capital[0] : 'No Capital'}` +
        `&dec=${country.flags.alt || ''}`;
    });

    row.appendChild(cloneCard);
  });
}

// ================= BUILD UNIQUE DROPDOWN =================
    function buildDropdown(data) {
    const regions = [...new Set(data.map(c => c.region).filter(Boolean))];

    regions.forEach(region => {
        const item = document.createElement('li');
        item.classList.add('dropdown-item');
        item.innerText = region;

        item.addEventListener('click', () => {
        const filtered = allCountries.filter(c => c.region === region);
        renderCountries(filtered);
        });

        dropDown.appendChild(item);
    });
    }

// ================= DARK MODE =================
modeChange.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDark = body.classList.contains("dark");

  favIcon.classList.toggle("fa-solid", isDark);
  favIcon.classList.toggle("fa-regular", !isDark);

  modeText.innerText = isDark ? "Dark Mode" : "Light Mode";
});

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = allCountries.filter(country =>
    country.name.common.toLowerCase().includes(value)
  );

  renderCountries(filtered);
});