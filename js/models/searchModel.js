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
    for (let recipes of this.search(motRecherche, tags)) {
      this.arrayRecipe.push(recipes);
    }

    return this.arrayRecipe.flat();
  }

  search(motRecherche, tags) {
    let motTrouve = [];

    if (tags.length > 0) {
      motTrouve = this.searchByTag(tags[0]);
      if (tags.length > 1) {
        tags.forEach((unTag) => {
          motTrouve = this.searchByAllTags(unTag, motTrouve);
        });
      }
      if (motRecherche.length) {
        let listeTriee = [];
        for (let i = 0; i < motTrouve.length; i++) {
          if (
            motTrouve[i].name.includes(motRecherche) ||
            motTrouve[i].description.includes(motRecherche) ||
            motTrouve[i].ingredients.find((unIngredient) =>
              unIngredient.ingredient.includes(motRecherche)
            )
          ) {
            listeTriee.push(motTrouve[i]);
          }
        }
        motTrouve = listeTriee;
        return motTrouve;
      }
    } else {
      for (let i = 0; i < this.datas.length; i++) {
        if (
          this.datas[i].name.includes(motRecherche) ||
          this.datas[i].description.includes(motRecherche) ||
          this.datas[i].ingredients.find((unIngredient) =>
            unIngredient.ingredient.includes(motRecherche)
          )
        ) {
          motTrouve.push(this.datas[i]);
        }
      }
      return motTrouve;
    }

    return motTrouve;
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
    recetteFiltreTag = this.datas.filter(
      (el) =>
        el.appliance.toLowerCase().includes(tags) ||
        el.ustensils.find((unUstensil) =>
          unUstensil.toLowerCase().includes(tags)
        ) ||
        el.ingredients.find((unIngredient) =>
          unIngredient.ingredient.toLowerCase().includes(tags)
        )
    );
    return recetteFiltreTag;
  }
  searchByAllTags(unTag, listeRecette) {
    let recetteFiltreTag = [];
    for (let i = 0; i < listeRecette.length; i++) {
      if (
        listeRecette[i].name.toLowerCase().includes(unTag) ||
        listeRecette[i].description.toLowerCase().includes(unTag) ||
        listeRecette[i].ingredients.find((unIngredient) =>
          unIngredient.ingredient.toLowerCase().includes(unTag)
        )
      ) {
        recetteFiltreTag.push(listeRecette[i]);
      }
    }
    return recetteFiltreTag;
  }
}
