const list1 = document.querySelector('.menu1');
const list2 = document.querySelector('.menu2');
const list3 = document.querySelector('.menu3');
const arrayIngredients = [];
const arrayAppliance = [];
const arrayUstensils = [];

export function listTag(e) {
  ////Ingredient Tag////
  e.forEach((recipe) =>
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
  e.forEach((recipes) => {
    arrayAppliance.push(recipes.appliance);
  });
  const uniqueAppliance = [...new Set(arrayAppliance)];
  uniqueAppliance.sort((a, b) => a.localeCompare(b));
  uniqueAppliance.forEach((el) => {
    const listAplliance = document.createElement('li');
    listAplliance.setAttribute(
      'class',
      'dropdown-item text-white overflow-hidden'
    );
    listAplliance.setAttribute('style', 'width: 190px');
    listAplliance.innerHTML = `<a>${el}</a>`;
    list2.appendChild(listAplliance);
  });

  ////Ustensil Tag////
  e.forEach((recipe) =>
    recipe.ustensils.forEach((ustensil) =>
      arrayUstensils.push(ustensil.toLowerCase())
    )
  );
  const uniqueUstensil = [...new Set(arrayUstensils)];
  uniqueUstensil.sort((a, b) => a.localeCompare(b));
  uniqueUstensil.forEach((el) => {
    const listUstensils = document.createElement('li');
    listUstensils.setAttribute(
      'class',
      'dropdown-item text-white overflow-hidden'
    );
    listUstensils.setAttribute('style', 'width: 190px');
    listUstensils.innerHTML = `<a>${el}</a>`;
    list3.appendChild(listUstensils);
  });
}
