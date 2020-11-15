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
