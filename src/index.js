import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import './styles.css';
import AppendMarkup from './js/appendMarkup';

const renderMarkup = new AppendMarkup({
  inputElement: '.js-search',
  countriesBlock: '.countries'
})

renderMarkup.init();
