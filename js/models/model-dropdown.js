let list1 = document.querySelector('.menu1');
let list2 = document.querySelector('.menu2');
let list3 = document.querySelector('.menu3');

export class DataDropdown {
  constructor() {
    this.arrayIngredients = [];
    this.arrayAppliance = [];
    this.arrayUstensils = [];
  }

  searchListIngredient(tagRecherche) {
    let ingredientTrouve = [];
    ingredientTrouve = this.arrayIngredients.filter((element) =>
      element.toLowerCase().includes(tagRecherche)
    );
    return ingredientTrouve;
  }
  searchListAppliance(tagRecherche) {
    let applianceTrouve = [];
    applianceTrouve = this.arrayAppliance.filter((element) =>
      element.toLowerCase().includes(tagRecherche)
    );
    return applianceTrouve;
  }
  searchListUstensil(tagRecherche) {
    let ustensilTrouve = [];
    ustensilTrouve = this.arrayUstensils.filter((element) =>
      element.toLowerCase().includes(tagRecherche)
    );
    return ustensilTrouve;
  }

  listTagIngredients(listeRecette) {
    this.arrayIngredients = [];
    listeRecette.forEach((recipe) =>
      recipe.ingredients.forEach((el) =>
        this.arrayIngredients.push(el.ingredient.toLowerCase())
      )
    );
    return this.arrayIngredients;
  }
  listTagAppliance(listeRecette) {
    this.arrayAppliance = [];
    listeRecette.forEach((recipes) => {
      this.arrayAppliance.push(recipes.appliance.toLowerCase());
    });
    return this.arrayAppliance;
  }

  listTagUstensils(listeRecette) {
    this.arrayUstensils = [];
    listeRecette.forEach((recipe) =>
      recipe.ustensils.forEach((ustensil) =>
        this.arrayUstensils.push(ustensil.toLowerCase())
      )
    );
    return this.arrayUstensils;
  }

  createListIngredient(array) {
    list1.innerHTML = '';
    const uniqueIngredient = [...new Set(array)];
    uniqueIngredient.sort((a, b) => a.localeCompare(b));
    uniqueIngredient.forEach((e) => {
      const listIngredient = document.createElement('li');
      listIngredient.setAttribute(
        'class',
        'dropdown-item ingredient-item text-white overflow-hidden'
      );
      listIngredient.setAttribute('style', 'width: 190px');
      listIngredient.innerHTML = `${e}`;
      list1.appendChild(listIngredient);
    });
  }

  createListAppliance(array) {
    list2.innerHTML = '';
    const uniqueAppliance = [...new Set(array)];
    uniqueAppliance.sort((a, b) => a.localeCompare(b));
    uniqueAppliance.forEach((el) => {
      const listAplliance = document.createElement('li');
      listAplliance.setAttribute(
        'class',
        'dropdown-item appliance-item text-white overflow-hidden'
      );
      listAplliance.setAttribute('style', 'width: 190px');
      listAplliance.innerHTML = `${el}`;
      list2.appendChild(listAplliance);
    });
  }
  createListUstensil(array) {
    list3.innerHTML = '';
    const uniqueUstensil = [...new Set(array)];
    uniqueUstensil.sort((a, b) => a.localeCompare(b));
    uniqueUstensil.forEach((el) => {
      const listUstensils = document.createElement('li');
      listUstensils.setAttribute(
        'class',
        'dropdown-item ustensil-item text-white overflow-hidden'
      );
      listUstensils.setAttribute('style', 'width: 190px');
      listUstensils.innerHTML = ` ${el}`;
      list3.appendChild(listUstensils);
    });
  }
}
