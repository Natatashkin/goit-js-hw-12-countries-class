import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import './styles.css';
import ApendMarkup from './js/appendMarkup';

const apendMarkup = new ApendMarkup({
    inputElement: '.js-search',
    countriesBlock: 'countries'
})
