import { Card } from "./Card.js";
import { Tags } from "./Tags.js";
import { SearchModel } from "../models/searchModel.js";

export class AllDisplay {
  constructor() {
    this.listIngredient = document.querySelector(".menu1");
    this.listAppareils = document.querySelector(".menu2");
    this.listUstensils = document.querySelector(".menu3");

    this.searchModel = new SearchModel();
  }

  search(motRechercher) {
    // faire l'affichage
    let motTrouve = this.searchModel.search(motRechercher);
  }

  displayIngredient() {
    this.searchModel.getIngredients.forEach((e) => {
      this.listElement = document.createElement("li");
      this.listElement.setAttribute(
        "class",
        "dropdown-item text-white overflow-hidden ingredient-item"
      );
      this.listElement.setAttribute("style", "width: 190px");
      this.listElement.innerHTML = `${e}`;
      this.listIngredient.appendChild(this.listElement);
    });
  }

  displayAplliance() {
    this.searchModel.getIngredients.forEach((e) => {
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

  displayUstensil() {
    this.searchModel.getIngredients.forEach((e) => {
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
