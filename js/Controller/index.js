// import { listTag } from '../Vue/listTags.js';
import { recipes } from '../../data/recipes.js';
import { recipeDisplay } from '../Vue/Card.js';
import { DataRecipe } from '../models/models.js';

const datarecipe = new DataRecipe();
const searchInput = document.querySelector('#search');
const searchResult = document.querySelector('.js-card');
let filteredArray = [];

searchInput.addEventListener('input', filterData);

function filterData(e) {
  const searchedString = e.target.value.toLowerCase();
  searchResult.innerHTML = '';

  if (searchedString.length >= 3) {
    filteredArray = datarecipe.search(searchedString);
    recipeDisplay(filteredArray);
    datarecipe.listTagIngredients(filteredArray);
    datarecipe.listTagAppliance(filteredArray);
    datarecipe.listTagUstensils(filteredArray);
  } else if (searchedString.length === 0) {
    recipeDisplay(recipes);
  }
  console.log(filteredArray);
}
// listTag(recipes);
recipeDisplay(recipes);
