import { listTag } from '../Vue/listTags.js';
import { recipes } from '../../data/recipes.js';
import { recipeDisplay } from '../Vue/Card.js';

const searchInput = document.querySelector('#search');
const searchResult = document.querySelector('.js-card');

searchInput.addEventListener('input', filterData);

let filteredArr = [];
function filterData(e) {
  const searchedString = e.target.value.toLowerCase();
  searchResult.innerHTML = '';
  if (searchedString.length >= 3) {
    filteredArr = recipes.filter(
      (el) =>
        el.name.toLowerCase().includes(searchedString) ||
        el.description.toLowerCase().includes(searchedString)
      ////ingredient?///
    );
    recipeDisplay(filteredArr);
  } else if (searchedString.length === 0) {
    recipeDisplay(recipes);
  }
  console.log(filteredArr);
}
listTag(recipes);
recipeDisplay(recipes);