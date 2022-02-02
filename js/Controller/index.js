import { recipes } from '../../data/recipes.js';
import { recipeDisplay } from '../Vue/Card.js';
import { DataRecipe } from '../models/model-search.js';
import { DataDropdown } from '../models/model-dropdown.js';

const datarecipe = new DataRecipe();
const datadropdown = new DataDropdown();
const searchInput = document.querySelector('#search');
const searchResult = document.querySelector('.js-card');
const ingredientInput = document.getElementById('inputIngredient');
const applianceInput = document.getElementById('inputAppliance');
const ustensilInput = document.getElementById('inputUstensil');
let filteredArray = [];

function display() {
  const listIngredient = datadropdown.listTagIngredients(recipes);
  const listAplliance = datadropdown.listTagAppliance(recipes);
  const listUstensils = datadropdown.listTagUstensils(recipes);
  datadropdown.createListIngredient(listIngredient);
  datadropdown.createListAppliance(listAplliance);
  datadropdown.createListUstensil(listUstensils);
  recipeDisplay(recipes);
}
console.log(filteredArray);
searchInput.addEventListener('input', filterData);

function filterData(e) {
  const searchedString = e.target.value.toLowerCase();
  searchResult.innerHTML = '';

  if (searchedString.length >= 3) {
    filteredArray = [];
    filteredArray = datarecipe.search(searchedString);
    if (filteredArray.length === 0) {
      searchResult.textContent =
        '« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.';
    }
    recipeDisplay(filteredArray);
    const resultatIngredient = datadropdown.listTagIngredients(filteredArray);
    const resultatAppliance = datadropdown.listTagAppliance(filteredArray);
    const resultatUstensil = datadropdown.listTagUstensils(filteredArray);
    datadropdown.createListIngredient(resultatIngredient);
    datadropdown.createListAppliance(resultatAppliance);
    datadropdown.createListUstensil(resultatUstensil);
  } else if (searchedString.length === 0) {
    display();
  }
}
function filterIngredient() {
  ingredientInput.addEventListener('input', () => {
    const resultat = datadropdown.searchListIngredient(ingredientInput.value);
    datadropdown.createListIngredient(resultat);
  });
}
function filterAppliance() {
  applianceInput.addEventListener('input', () => {
    const resultat = datadropdown.searchListAppliance(applianceInput.value);
    datadropdown.createListAppliance(resultat);
  });
}
function filterUstensil() {
  ustensilInput.addEventListener('input', () => {
    const resultat = datadropdown.searchListUstensil(ustensilInput.value);
    datadropdown.createListUstensil(resultat);
  });
}

filterIngredient();
filterAppliance();
filterUstensil();
display();
