import { recipes } from "../../data/recipes.js";

export class SearchModel {
  constructor() {
    this.datas = recipes;
  }

  getIngredients(motRecherche, tags) {
    let listeRecette = this.getListeRecette(motRecherche, tags);
    this.arrayIngredients = [];
    listeRecette.forEach((recipe) =>
      recipe.ingredients.forEach((el) =>
        this.arrayIngredients.push(el.ingredient.toLowerCase())
      )
    );
    this.arrayIngredients = [...new Set(this.arrayIngredients)];
    this.arrayIngredients.sort((a, b) => a.localeCompare(b));
    return this.arrayIngredients;
  }

  getAppliances(motRecherche, tags) {
    let listeRecette = this.getListeRecette(motRecherche, tags);
    this.arrayAppliance = [];
    listeRecette.forEach((recipe) => {
      this.arrayAppliance.push(recipe.appliance.toLowerCase());
    });
    this.arrayAppliance = [...new Set(this.arrayAppliance)];
    this.arrayAppliance.sort((a, b) => a.localeCompare(b));
    return this.arrayAppliance;
  }

  getUstensils(motRecherche, tags) {
    let listeRecette = this.getListeRecette(motRecherche, tags);
    this.arrayUstensils = [];
    listeRecette.forEach((recipe) =>
      recipe.ustensils.forEach((ustensil) =>
        this.arrayUstensils.push(ustensil.toLowerCase())
      )
    );
    this.arrayUstensils = [...new Set(this.arrayUstensils)];
    this.arrayUstensils.sort((a, b) => a.localeCompare(b));
    return this.arrayUstensils;
  }

  getListeRecette(motRecherche, tags) {
    this.arrayRecipe = [];
    this.search(motRecherche, tags).forEach((recipes) => {
      this.arrayRecipe.push(recipes);
    });

    return this.arrayRecipe;
  }

  search(motRecherche, tags) {
    let motTrouve = [];

    if (tags.length > 0) {
      motTrouve.push(this.searchByTag(tags[0]));
      if (tags.length > 1) {
        tags.forEach((unTag) => {
          motTrouve = this.searchByAllTags(unTag, motTrouve);
        });
      }
      if (motRecherche.length) {
        motTrouve = motTrouve
          .flat()
          .filter(
            (el) =>
              el.name.toLowerCase().includes(motRecherche) ||
              el.description.toLowerCase().includes(motRecherche) ||
              el.ingredients.find((unIngredient) =>
                unIngredient.ingredient.toLowerCase().includes(motRecherche)
              )
          );
      }
    } else {
      motTrouve = this.datas.filter(
        (el) =>
          el.name.toLowerCase().includes(motRecherche) ||
          el.description.toLowerCase().includes(motRecherche) ||
          el.ingredients.find((unIngredient) =>
            unIngredient.ingredient.toLowerCase().includes(motRecherche)
          )
      );
    }
    return motTrouve.flat();
  }

  searchIngredientList(ingredientRecherche, tags) {
    let ingredientTrouve = [];
    let ingredientList = this.getIngredients("", tags);
    ingredientTrouve = ingredientList.filter((ingredient) =>
      ingredient.includes(ingredientRecherche)
    );
    return ingredientTrouve;
  }
  searchApplianceList(applianceRecherche, tags) {
    let applianceTrouve = [];
    let applianceList = this.getAppliances("", tags);
    applianceTrouve = applianceList.filter((appliance) =>
      appliance.includes(applianceRecherche)
    );
    return applianceTrouve;
  }
  searchUstensilList(ustensilRecherche, tags) {
    let ustensilTrouve = [];
    let ustensilList = this.getUstensils("", tags);
    ustensilTrouve = ustensilList.filter((ustensil) =>
      ustensil.includes(ustensilRecherche)
    );
    return ustensilTrouve;
  }
  searchByTag(tags) {
    let recetteFiltreTag = [];
    recetteFiltreTag.push(
      this.datas.filter(
        (el) =>
          el.appliance.toLowerCase().includes(tags) ||
          el.ustensils.find((unUstensil) =>
            unUstensil.toLowerCase().includes(tags)
          ) ||
          el.ingredients.find((unIngredient) =>
            unIngredient.ingredient.toLowerCase().includes(tags)
          )
      )
    );
    return recetteFiltreTag.flat();
  }
  searchByAllTags(unTag, listeRecette) {
    let recetteFiltreTag = [];
    recetteFiltreTag = listeRecette
      .flat()
      .filter(
        (el) =>
          el.appliance.toLowerCase().includes(unTag) ||
          el.ustensils.find((unUstensil) =>
            unUstensil.toLowerCase().includes(unTag)
          ) ||
          el.ingredients.find((unIngredient) =>
            unIngredient.ingredient.toLowerCase().includes(unTag)
          )
      );
    return recetteFiltreTag.flat();
  }
}
