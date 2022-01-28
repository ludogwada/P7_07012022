import { recipes } from '../../data/recipes.js';
const list1 = document.querySelector('.menu1');
const list2 = document.querySelector('.menu2');
const list3 = document.querySelector('.menu3');

export class DataRecipe {
  constructor() {
    this.datas = recipes;
    this.arrayIngredients = [];
    this.arrayAppliance = [];
    this.arrayUstensils = [];
  }

  getDatas() {
    /*
    
    tri_à_bulles_optimisé(Tableau T)
    pour i allant de (taille de T)-1 à 1
    tableau_trié := vrai
    pour j allant de 0 à i-1
    si T[j+1] < T[j]
    (T[j+1], T[j]) = (T[j], T[j+1])
    tableau_trié := faux
    si tableau_trié
    fin tri_à_bulles_optimisé
    */

    for (let index = 0; index < this.datas.length; index++) {
      console.log();
      let tableau_trie = true;
      for (let j = 0; j < index - 1; j++) {
        if (this.datas[j + 1] < this.datas[j]) {
          this.datas[j + 1] = this.datas[j];
          this.datas[j] = this.datas[j + 1];
          tableau_trie = false;
        }
      }
      if (tableau_trie) {
        break;
      }
    }

    return this.datas;
  }

  search(motRecherche) {
    let motTrouve = [];
    motTrouve = this.datas.filter(
      (el) =>
        el.name.toLowerCase().includes(motRecherche) ||
        el.description.toLowerCase().includes(motRecherche) ||
        el.ingredients.find((unIngredient) =>
          unIngredient.ingredient.toLowerCase().includes(motRecherche)
        )
    );
    return motTrouve;
  }

  listTagIngredients(listeRecette) {
    listeRecette.forEach((recipe) =>
      recipe.ingredients.forEach((el) =>
        this.arrayIngredients.push(el.ingredient)
      )
    );
    const uniqueIngredient = [...new Set(this.arrayIngredients)];
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

  listTagAppliance(listeRecette) {
    listeRecette.forEach((recipes) => {
      this.arrayAppliance.push(recipes.appliance);
    });
    const uniqueAppliance = [...new Set(this.arrayAppliance)];
    uniqueAppliance.sort((a, b) => a.localeCompare(b));
    uniqueAppliance.forEach((el) => {
      const listAplliance = document.createElement('li');
      listAplliance.setAttribute(
        'class',
        'dropdown-item appareil-item text-white overflow-hidden'
      );
      listAplliance.setAttribute('style', 'width: 190px');
      listAplliance.innerHTML = `${el}`;
      list2.appendChild(listAplliance);
    });
  }

  listTagUstensils(listeRecette) {
    listeRecette.forEach((recipe) =>
      recipe.ustensils.forEach((ustensil) =>
        this.arrayUstensils.push(ustensil.toLowerCase())
      )
    );
    const uniqueUstensil = [...new Set(this.arrayUstensils)];
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
