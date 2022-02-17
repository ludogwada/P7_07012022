import { recipes } from "../../data/recipes.js";
import { Card } from "./Card.js";
import { SearchModel } from "../models/searchModel.js";
import { AllDisplay } from "./Display.js";

export class Control {
  constructor() {
    this.searchModel = new SearchModel();
    this.allDisplay = new AllDisplay();
    this.card = new Card();

    this.searchResult = document.querySelector(".js-card");
    this.tags = [];
  }

  addTag() {
    let dropdownElement = document.querySelectorAll(".dropdown-item");
    for (let element of dropdownElement) {
      element.addEventListener("click", (e) => {
        if (element.classList[3] == "ingredient-item") {
          this.allDisplay.createTag("blue", element.innerHTML);
        } else if (element.classList[3] == "appliance-item") {
          this.allDisplay.createTag("green", element.innerHTML);
        } else if (element.classList[3] == "ustensil-item") {
          this.allDisplay.createTag("red", element.innerHTML);
        }
        this.tags.push(element);
      });
    }
  }

  removeTag() {
    //TODO
  }

  /*EVENT LISTENER*/
  eventSearchBar() {
    let searchInput = document.querySelector("#search");
    searchInput.addEventListener("input", () => {
      if (searchInput.value.length >= 3) {
        this.allDisplay.search(searchInput.value, this.tags);
        this.allDisplay.displayIngredient(
          this.searchModel.getIngredients(searchInput.value)
        );
        this.allDisplay.displayAppliance(
          this.searchModel.getAppliances(searchInput.value)
        );
        this.allDisplay.displayUstensil(
          this.searchModel.getUstensils(searchInput.value)
        );
      } else {
        if (this.tags.length == 0) {
          this.searchResult.innerHTML = "";
        } else {
          this.allDisplay.search("", this.tags);
        }
        this.card.recipeDisplay(recipes);
        this.allDisplay.displayIngredient(
          this.searchModel.getIngredients(recipes)
        );
        this.allDisplay.displayAppliance(
          this.searchModel.getAppliances(recipes)
        );
        this.allDisplay.displayUstensil(this.searchModel.getUstensils(recipes));
      }
    });
  }
  eventIngredient() {
    let ingredientInput = document.getElementById("inputIngredient");
    let menuIngredients = document.querySelector(".menuIngredients");
    ingredientInput.addEventListener("input", () => {
      if (ingredientInput.value.length >= 1) {
        menuIngredients.innerHTML = "";
        this.allDisplay.displayIngredient(
          this.searchModel.searchIngredientList(ingredientInput.value, recipes)
        );
      } else {
        menuIngredients.innerHTML = "";
        this.allDisplay.displayIngredient(
          this.searchModel.getIngredients(recipes)
        );
      }
    });
  }
  eventAppliance() {
    let applianceInput = document.getElementById("inputAppliance");
    let menuAppliances = document.querySelector(".menuAppliances");
    applianceInput.addEventListener("input", () => {
      if (applianceInput.value.length >= 1) {
        menuAppliances.innerHTML = "";
        this.allDisplay.displayAppliance(
          this.searchModel.searchApplianceList(applianceInput.value, recipes)
        );
      } else {
        menuAppliances.innerHTML = "";
        this.allDisplay.displayAppliance(
          this.searchModel.getAppliances(recipes)
        );
      }
    });
  }
  eventUstensil() {
    let ustensilInput = document.getElementById("inputUstensil");
    let menuUstensils = document.querySelector(".menuUstensils");
    ustensilInput.addEventListener("input", () => {
      if (ustensilInput.value.length >= 1) {
        menuUstensils.innerHTML = "";
        this.allDisplay.displayUstensil(
          this.searchModel.searchUstensilList(ustensilInput.value, recipes)
        );
      } else {
        menuUstensils.innerHTML = "";
        this.allDisplay.displayUstensil(this.searchModel.getUstensils(recipes));
      }
    });
  }
}
