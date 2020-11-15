import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import './styles.css';
import AppendMarkup from './js/appendMarkup';

const appendMarkup = new AppendMarkup({
    inputElement: '.js-search',
    countriesBlock: 'countries'
})
