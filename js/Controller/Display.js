// import { recipes } from "../../data/recipes.js";
import { SearchModel } from "../models/searchModel.js";
import { Card } from "./Card.js";

export class AllDisplay {
  constructor() {
    this.listIngredient = document.querySelector(".menu1");
    this.listAppareils = document.querySelector(".menu2");
    this.listUstensils = document.querySelector(".menu3");
    this.searchResult = document.querySelector(".js-card");

    this.searchModel = new SearchModel();
    this.card = new Card();
  }

  search(motRechercher) {
    // faire l'affichage
    let locationRecipe = document.querySelector(".js-card");
    let recetteTrouvee = this.searchModel.getListeRecette(motRechercher);
    if (recetteTrouvee.length === 0) {
      locationRecipe.innerHTML = "";
      this.card.noCard(locationRecipe);
    } else {
      locationRecipe.innerHTML = "";
      this.card.recipeDisplay(recetteTrouvee);
    }
  }

  displayIngredient() {
    this.searchModel.getIngredients().forEach((e) => {
      const listElement = document.createElement("li");
      listElement.setAttribute(
        "class",
        "dropdown-item text-white overflow-hidden ingredient-item"
      );
      listElement.setAttribute("style", "width: 190px");
      listElement.innerHTML = `${e}`;
      this.listIngredient.appendChild(listElement);
    });
  }

  displayAplliance() {
    this.searchModel.getAppliance().forEach((e) => {
      this.listElement = document.createElement("li");
      this.listElement.setAttribute(
        "class",
        "dropdown-item text-white overflow-hidden appliance-item"
      );
      this.listElement.setAttribute("style", "width: 190px");
      this.listElement.innerHTML = `${e}`;
      this.listAppareils.appendChild(this.listElement);
    });
  }

  displayUstensils() {
    this.searchModel.getUstensils().forEach((e) => {
      this.listElement = document.createElement("li");
      this.listElement.setAttribute(
        "class",
        "dropdown-item text-white overflow-hidden ustensil-item"
      );
      this.listElement.setAttribute("style", "width: 190px");
      this.listElement.innerHTML = `${e}`;
      this.listUstensils.appendChild(this.listElement);
    });
  }
}
