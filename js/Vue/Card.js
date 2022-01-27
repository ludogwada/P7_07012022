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
        let quantite =
          (e.quantity ? ' :' : '') + (e.quantity ? e.quantity : ' ');
        let unite = e.unit ? e.unit : ' ';

        return `<li><strong>${e.ingredient}</strong><span>${quantite} ${unite}</span> </li>`;
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
export { recipeDisplay };
