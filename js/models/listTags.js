import { recipes } from '../../data/recipes.js';

const list1 = document.querySelector('.menu1');
const list2 = document.querySelector('.menu2');
const list3 = document.querySelector('.menu3');

function listTag() {
  //   recipes.forEach((e) => {
  //     const listingredient = document.createElement('li');
  //     listingredient.classList.add('dropdown-item');
  //     listingredient.innerHTML = `<a>${e.ingredients.map(e)}</a>`;
  //     list1.appendChild(listingredient);
  //   });
  recipes.forEach((e) => {
    const listAplliance = document.createElement('li');
    listAplliance.classList.add('dropdown-item');
    listAplliance.innerHTML = `<a>${e.appliance}</a>`;
    list2.appendChild(listAplliance);
  });
  recipes.forEach((e) => {
    const listUstensils = document.createElement('li');
    listUstensils.classList.add('dropdown-item');
    listUstensils.innerHTML = `<a>${e.ustensils}</a>`;
    list3.appendChild(listUstensils);
  });
}
listTag();
