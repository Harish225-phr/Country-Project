const params = new URLSearchParams(window.location.search)

const countryNam = params.get('name')
let countryDec = document.querySelector('.country-desc');
let countryName = document.querySelector('.country-name');
let cardImage = document.querySelector('.card-image')
let countryPopulation = document.querySelector('.country-population');
let countryRegion = document.querySelector('.country-region');
let countryCapital = document.querySelector('.country-capital');
let borderCountry = document.querySelector('.border-country');
let borderCountryContainer = document.querySelector('.brder-country-container');



fetch(`https://restcountries.com/v3.1/name/${countryNam}?fullText=true`)
.then((res) => res.json())
.then((data) => {
    console.log(data[0])
    countryDec.innerText = data[0].flags.alt
    cardImage.src = data[0].flags.png
    countryName.innerText = countryNam
    countryPopulation.innerText = data[0].population
    countryRegion.innerText = data[0].region
    countryCapital.innerText = data[0].capital
    data[0].borders.forEach((borer) => {
    let createButton = document.createElement('button');
    createButton.classList.add(
  'btn',
  'btn-light',
  'shadow-sm',
  'btn-sm',
  'px-3',
  'border-country'
)
    createButton.innerText = borer
    borderCountryContainer.appendChild(createButton)
    })
})




