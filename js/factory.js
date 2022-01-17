import { recipes } from '../data/recipes.js';

function recipeDisplay() {
  document.querySelector('.js-card').innerHTML = recipes
    .map(
      (recipes) =>
        `<li id="card${recipes.id}" class="d-flex col-3 m-4 p-0 card-recipe">
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
  </li>`
    )
    .join('');
}
recipeDisplay();
