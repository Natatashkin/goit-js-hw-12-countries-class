import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import './styles.css';
import { alert, Stack } from '@pnotify/core';

const debounce = require('lodash.debounce');

import FetchCountries from './js/fetchCountries';
import countryListTpl from './templates/countries-list.hbs';
import countryInfoTpl from './templates/country-info.hbs';
import { notification } from './js/notify';
import AppendMarkup from './js/appendMarkup';



const renderMarkup = new AppendMarkup({
  inputElement: '.js-search',
  countriesBlock: '.countries'
})

renderMarkup.init();

// const fetchApiCountries = new FetchCountries();  



// function onSearch(event) {
//   clearCountriesMarkUp();
//   fetchApiCountries.query = event.target.value.trim();

//   if (fetchApiCountries.query === '') {
//     clearInputField();
//     notification('error', "Enter country name!");
//     return;
//   }

//   fetchApiCountries.fetchCountriesByName()
//     .then(appendCountriesMarkUp)
//     .then(clearInputField)
//     .catch(onCatchError)
// }

// function appendCountriesMarkUp(countries) {
//   const { length } = countries;

//   if (length < 2) {
//     showContryInfo(countries);
//     return;
//   }
  
//   if (length >= 2 && length <= 10) {
//     clearCountriesMarkUp(countries);
//     showCountryList(countries);
//     return;
//   }
  
//   if (length > 10) {
//     notification('error', "Too mahy matches found. Please enter a more specific query!");
//     return;
//   }
// }

// function showContryInfo(countries) {
//   refs.countriesMarkup.insertAdjacentHTML('beforeend', countryInfoTpl(countries));
// }

// function showCountryList(countries) {
// refs.countriesMarkup.insertAdjacentHTML('beforeend', countryListTpl(countries));
// }

// function clearCountriesMarkUp(countries) {
//   refs.countriesMarkup.innerHTML= '';
// }

// function clearInputField() {
//   refs.input.value = '';
// }

// function onCatchError() {
//   clearInputField();
//     notification('error', "Enter country name!");
//     return;
// }






