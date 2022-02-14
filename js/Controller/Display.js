import { recipes } from "../../data/recipes.js";
import { SearchModel } from "../models/searchModel.js";
import { Card } from "./Card.js";

export class AllDisplay {
  constructor() {
    this.listIngredient = document.querySelector(".menuIngredients");
    this.listAppareils = document.querySelector(".menuAppliances");
    this.listUstensils = document.querySelector(".menuUstensils");
    this.searchResult = document.querySelector(".js-card");

    this.searchModel = new SearchModel();
    this.card = new Card();
  }

  search(motRechercher) {
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

  displayIngredient(search) {
    search.forEach((e) => {
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

  displayAppliance(search) {
    search.forEach((e) => {
      const listElement = document.createElement("li");
      listElement.setAttribute(
        "class",
        "dropdown-item text-white overflow-hidden appliance-item"
      );
      listElement.setAttribute("style", "width: 190px");
      listElement.innerHTML = `${e}`;
      this.listAppareils.appendChild(listElement);
    });
  }

  displayUstensil(search) {
    search.forEach((e) => {
      const listElement = document.createElement("li");
      listElement.setAttribute(
        "class",
        "dropdown-item text-white overflow-hidden ustensil-item"
      );
      listElement.setAttribute("style", "width: 190px");
      listElement.innerHTML = `${e}`;
      this.listUstensils.appendChild(listElement);
    });
  }
}
