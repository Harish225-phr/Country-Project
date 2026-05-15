const params = new URLSearchParams(window.location.search)

const countryNam = params.get('name')
const countryImg = params.get('img')
const countryPop = params.get('population')
const countryReg = params.get('region')
const countryCap = params.get('capital')
const imgDesc = params.get('dec')

let cardImage = document.querySelector('.card-image')
cardImage.src = countryImg;

let countryName = document.querySelector('.country-name');
countryName.innerText = countryNam;

let countryPopulation = document.querySelector('.country-population');
countryPopulation.innerText = countryPop;

let countryRegion = document.querySelector('.country-region');
countryRegion.innerText = countryReg;

let countryCapital = document.querySelector('.country-capital');
countryCapital.innerText = countryCap;

let countryDec = document.querySelector('.country-desc');
countryDec.innerText = imgDesc;