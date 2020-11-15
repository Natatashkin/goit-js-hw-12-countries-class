import FetchCountries from './fetchCountries';
import countryListTpl from '../templates/countries-list.hbs';
import countryInfoTpl from '../templates/country-info.hbs';
import { notification } from './notify';

const debounce = require('lodash.debounce');

export default class AppendMarkup {
    constructor({ inputElement, countriesBlock }) {
        this.refs = {
            input: document.querySelector(inputElement),
            countriesMarkup: document.querySelector(countriesBlock)
        }
       this.init();
    }

    init() {
        // this.clearInputField = this.clearInputField.bind(this)
        // this.onSearch = this.onSearch.bind(this);
        // this.appendCountriesMarkUp = this.appendCountriesMarkUp.bind(this);
        this.debounce = debounce(this.onSearch, 500);
        this.refs.input.addEventListener('input', this.debounce);
    }

    onSearch(event) {
        const fetchCountries = new FetchCountries();
        
        this.clearCountriesMarkUp();
        fetchCountries.query = event.target.value.trim();
        console.log(fetchCountries.query);

        if (fetchCountries.query === '') {
            
            this.clearInputField();
            notification('error', "Enter country name!");
            return;
        }

        fetchCountries.fetchCountriesByName()
            .then(this.appendCountriesMarkUp)
            .then(this.clearInputField)
            .catch(this.onCatchError)
    }

    appendCountriesMarkUp(countries) {
        const { length } = countries;

        if (length < 2) {
            this.showContryInfo(countries);
            return;
        }
        
        if (length >= 2 && length <= 10) {
            this.clearCountriesMarkUp();
            this.showCountryList(countries);
            return;
        }
        
        if (length > 10) {
            notification('error', "Too mahy matches found. Please enter a more specific query!");
            return;
        }
    }

    showContryInfo(countries) {
        this.refs.countriesMarkup.insertAdjacentHTML('beforeend', countryInfoTpl(countries));
    }

    showCountryList(countries) {
        this.refs.countriesMarkup.insertAdjacentHTML('beforeend', countryListTpl(countries));
    }

    clearCountriesMarkUp() {
        return this.refs.countriesMarkup.innerHTML= '';
    }

    clearInputField() {
        this.refs.input.value = '';
    }

    onCatchError() {
    this.clearInputField();
        notification('error', "Enter country name!");
        return;
    }

}