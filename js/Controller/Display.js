import { SearchModel } from "../models/searchModel.js";
import { Card } from "./Card.js";

export let tags = [];

export class AllDisplay {
  constructor() {
    this.listIngredient = document.querySelector(".menuIngredients");
    this.listAppareils = document.querySelector(".menuAppliances");
    this.listUstensils = document.querySelector(".menuUstensils");
    this.searchResult = document.querySelector(".js-card");
    this.tagsList = document.getElementById("tags");

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
      listElement.addEventListener("click", (e) => {
        this.addTag(listElement);
      });
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
      listElement.addEventListener("click", (e) => {
        this.addTag(listElement);
      });
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
      listElement.addEventListener("click", (e) => {
        this.addTag(listElement);
      });
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
    tagIcon.addEventListener("click", (e) => {
      this.deleteTag(tag);
    });

    this.tagsList.appendChild(tag);
    tag.appendChild(tagText);
    tag.appendChild(tagIcon);
  }

  addTag(element) {
    if (element.classList[3] == "ingredient-item") {
      this.createTag("blue", element.innerHTML);
    } else if (element.classList[3] == "appliance-item") {
      this.createTag("green", element.innerHTML);
    } else if (element.classList[3] == "ustensil-item") {
      this.createTag("red", element.innerHTML);
    }
    tags.push(element.innerText);
    this.displayInfos();
  }

  deleteTag(element) {
    let elementSupprime = element;
    tags = tags.filter(function (f) {
      return f !== elementSupprime.innerText;
    });

    elementSupprime.remove();
    this.displayInfos();
  }

  displayInfos() {
    let searchInput = document.querySelector("#search");
    let motRecherche = searchInput.value != undefined ? searchInput.value : "";
    this.search(motRecherche, tags);
    this.displayIngredient(this.searchModel.getIngredients(motRecherche, tags));
    this.displayAppliance(this.searchModel.getAppliances(motRecherche, tags));
    this.displayUstensil(this.searchModel.getUstensils(motRecherche, tags));
  }
}
