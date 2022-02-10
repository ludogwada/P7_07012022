import { recipes } from "../../data/recipes.js";

export class SearchModel {
  constructor() {
    this.datas = recipes;
  }

  getUstensils() {
    this.arrayUstensils = [];
    this.datas.forEach((recipe) =>
      recipe.ustensils.forEach((ustensil) =>
        this.arrayUstensils.push(ustensil.toLowerCase())
      )
    );
    this.arrayUstensils = [...new Set(this.arrayUstensils)];
    this.arrayUstensils.sort((a, b) => a.localeCompare(b));
    return this.arrayUstensils;
  }

  getIngredients() {
    this.arrayIngredients = [];
    this.datas.forEach((recipe) =>
      recipe.ingredients.forEach((el) =>
        this.arrayIngredients.push(el.ingredient.toLowerCase())
      )
    );
    this.arrayIngredients = [...new Set(this.arrayIngredients)];
    this.arrayIngredients.sort((a, b) => a.localeCompare(b));
    return this.arrayIngredients;
  }

  getAppliance() {
    this.arrayAppliance = [];
    this.datas.forEach((recipes) => {
      this.arrayAppliance.push(recipes.appliance.toLowerCase());
    });
    this.arrayAppliance = [...new Set(this.arrayAppliance)];
    this.arrayAppliance.sort((a, b) => a.localeCompare(b));
    return this.arrayAppliance;
  }

  getListeRecette() {
    //TODO
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
}
