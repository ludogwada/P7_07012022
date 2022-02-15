import { recipes } from "../../data/recipes.js";

export class SearchModel {
  constructor() {
    this.datas = recipes;
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

  getAppliances() {
    this.arrayAppliance = [];
    this.datas.forEach((recipe) => {
      this.arrayAppliance.push(recipe.appliance.toLowerCase());
    });
    this.arrayAppliance = [...new Set(this.arrayAppliance)];
    this.arrayAppliance.sort((a, b) => a.localeCompare(b));
    return this.arrayAppliance;
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

  getListeRecette(motRecherche) {
    this.arrayRecipe = [];
    this.search(motRecherche).forEach((recipes) => {
      this.arrayRecipe.push(recipes);
    });

    return this.arrayRecipe;
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

  searchIngredientList(ingredientRecherche) {
    let ingredientTrouve = [];
    let ingredientList = this.getIngredients();
    ingredientTrouve = ingredientList.filter((ingredient) =>
      ingredient.includes(ingredientRecherche)
    );
    return ingredientTrouve;
  }
  searchApplianceList(applianceRecherche) {
    let applianceTrouve = [];
    let applianceList = this.getAppliances();
    applianceTrouve = applianceList.filter((appliance) =>
      appliance.includes(applianceRecherche)
    );
    return applianceTrouve;
  }
  searchUstensilList(ustensilRecherche) {
    let ustensilTrouve = [];
    let ustensilList = this.getUstensils();
    ustensilTrouve = ustensilList.filter((ustensil) =>
      ustensil.includes(ustensilRecherche)
    );
    return ustensilTrouve;
  }
}
