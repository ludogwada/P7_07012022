import { recipes } from '../../data/recipes.js';

const list1 = document.querySelector('.menu1');
const list2 = document.querySelector('.menu2');
const list3 = document.querySelector('.menu3');

function listTag() {
  ////Ingredient Tag////
  const arrayIngredients = [];
  recipes.forEach((recipe) =>
    recipe.ingredients.forEach((el) => arrayIngredients.push(el.ingredient))
  );
  const uniqueIngredient = [...new Set(arrayIngredients)];
  uniqueIngredient.sort((a, b) => a.localeCompare(b));
  uniqueIngredient.forEach((e) => {
    const listIngredient = document.createElement('li');
    listIngredient.setAttribute(
      'class',
      'dropdown-item text-white overflow-hidden'
    );
    listIngredient.setAttribute('style', 'width: 190px');
    listIngredient.innerHTML = `<a>${e}</a>`;
    list1.appendChild(listIngredient);
  });
  ////Appliance Tag////
  const arrayAppliance = [];
  recipes.forEach((recipes) => {
    arrayAppliance.push(recipes.appliance);
  });
  const uniqueAppliance = [...new Set(arrayAppliance)];
  uniqueAppliance.sort((a, b) => a.localeCompare(b));
  uniqueAppliance.forEach((e) => {
    const listAplliance = document.createElement('li');
    listAplliance.setAttribute(
      'class',
      'dropdown-item text-white overflow-hidden'
    );
    listAplliance.setAttribute('style', 'width: 190px');
    listAplliance.innerHTML = `<a>${e}</a>`;
    list2.appendChild(listAplliance);
  });
  ////Ustensil Tag////
  const arrayUstensils = [];
  recipes.forEach((recipe) =>
    recipe.ustensils.forEach((ustensil) =>
      arrayUstensils.push(ustensil.toLowerCase())
    )
  );
  const uniqueUstensil = [...new Set(arrayUstensils)];
  uniqueUstensil.sort((a, b) => a.localeCompare(b));
  uniqueUstensil.forEach((e) => {
    const listUstensils = document.createElement('li');
    listUstensils.setAttribute(
      'class',
      'dropdown-item text-white overflow-hidden'
    );
    listUstensils.setAttribute('style', 'width: 190px');
    listUstensils.innerHTML = `<a>${e}</a>`;
    list3.appendChild(listUstensils);
  });
}
listTag();
