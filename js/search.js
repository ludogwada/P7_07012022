import { recipes } from '../data/recipes.js';
//import { DataRecipe } from './models/models.js';

//// VUE ////
const searchInput = document.querySelector('#search');
const searchResult = document.querySelector('.js-card');

function recipeDisplay(recipeList) {
  recipeList.forEach((recipes) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'd-flex m-4 p-0 w-auto');
    listItem.innerHTML = `<div id="card${
      recipes.id
    }" class="d-flex col-3  card-recipe">
    <article class="card col">
    <img src="#" class="card-img-top recipe-img" alt="${recipes.name}">
    <div class="card-body bg-light">
    <div class="recipe-header">
    <h5 class="card-title">${recipes.name}</h5>
    <span class="card-time"><i class="far fa-clock"></i> ${
      recipes.time
    } min</span>
    </div>
    <div class= "d-flex mt-3 overflow-hidden">
    <ul class="col card-text list-unstyled text-nowrap">${recipes.ingredients
      .map((e) => {
        if (e.unit === 'grammes') e.unit = 'g';
        else if (e.unit === 'cuillères à soupe') e.unit = 'cuillères';
        else if (e.unit === 'cuillère à soupe') e.unit = 'cuillère';
        return `<li><strong>${e.ingredient}</strong><span> ${
          e.quantity ? ' :' : ''
        } ${e.quantity ? e.quantity : ' '} ${
          e.unit ? e.unit : ' '
        } </span> </li>`;
      })
      .join('')}
  </ul>
    <p class="col recipe-text overflow-hidden">${recipes.description}</p>
    </div>
    </article>
    </div>`;
    searchResult.appendChild(listItem);
  });
}
searchInput.addEventListener('input', filterData);
//// END VUE ////

//// CONTROLLER ////

function filterData(e) {
  const searchedSrting = e.target.value.toLowerCase();
  searchResult.innerHTML = '';
  if (searchedSrting.length >= 3) {
    /*let dataRecipe = new DataRecipe(recipes);

    recipeDisplay(dataRecipe.getDatas());*/

    //// MODEL ////

    const filteredArr = recipes.filter(
      (el) =>
        el.name.toLowerCase().includes(searchedSrting) ||
        // el.ingredients.includes(searchedSrting) ||
        el.ustensils.includes(searchedSrting) ||
        el.appliance.toLowerCase().includes(searchedSrting)
    );
    recipeDisplay(filteredArr);

    //// MODEL ////
  } else if (searchedSrting.length === 0) {
    recipeDisplay(recipes);
  }
}

recipeDisplay(recipes);

//// CONTROLLER ////
