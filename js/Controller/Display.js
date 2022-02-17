import { recipes } from "../../data/recipes.js";
import { SearchModel } from "../models/searchModel.js";
import { Card } from "./Card.js";

export class AllDisplay {
  constructor() {
    this.listIngredient = document.querySelector(".menuIngredients");
    this.listAppareils = document.querySelector(".menuAppliances");
    this.listUstensils = document.querySelector(".menuUstensils");
    this.searchResult = document.querySelector(".js-card");
    this.tags = document.getElementById("tags");

    this.searchModel = new SearchModel();
    this.card = new Card();
  }

  search(motRechercher, tags) {
    let locationRecipe = document.querySelector(".js-card");
    let recetteTrouvee = this.searchModel.getListeRecette(motRechercher, tags);
    if (recetteTrouvee.length === 0) {
      locationRecipe.innerHTML = "";
      this.card.noCard(locationRecipe);
    } else {
      locationRecipe.innerHTML = "";
      this.card.recipeDisplay(recetteTrouvee);
    }
  }

  displayIngredient(search) {
    this.listIngredient.innerHTML = "";
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
    this.listAppareils.innerHTML = "";
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
    this.listUstensils.innerHTML = "";
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
  createTag(color, value) {
    let tag = document.createElement("li");
    let tagText = document.createElement("p");
    let tagIcon = document.createElement("i");
    tag.classList.add("tag");
    tag.classList.add("bg-" + color);

    tagText.setAttribute("class", "mb-0 tag__text");
    tagText.innerHTML = value;

    tagIcon.setAttribute("class", "mx-1 far fa-times-circle fa-lg js-cross");
    tagIcon.setAttribute("type", "button");

    this.tags.appendChild(tag);
    tag.appendChild(tagText);
    tag.appendChild(tagIcon);
  }
}
