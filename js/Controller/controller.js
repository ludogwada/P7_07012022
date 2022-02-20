import { Card } from "./Card.js";
import { SearchModel } from "../models/searchModel.js";
import { AllDisplay } from "./Display.js";
import { tags } from "./Display.js";

export class Control {
  constructor() {
    this.searchModel = new SearchModel();
    this.allDisplay = new AllDisplay();
    this.card = new Card();

    this.searchResult = document.querySelector(".js-card");
  }

  /*EVENT LISTENER*/
  eventSearchBar() {
    let searchInput = document.querySelector("#search");
    searchInput.addEventListener("input", () => {
      if (searchInput.value.length >= 3) {
        this.allDisplay.search(searchInput.value, tags);
        this.allDisplay.displayIngredient(
          this.searchModel.getIngredients(searchInput.value, tags)
        );
        this.allDisplay.displayAppliance(
          this.searchModel.getAppliances(searchInput.value, tags)
        );
        this.allDisplay.displayUstensil(
          this.searchModel.getUstensils(searchInput.value, tags)
        );
      } else {
        this.allDisplay.search("", tags);
        this.allDisplay.displayIngredient(
          this.searchModel.getIngredients("", tags)
        );
        this.allDisplay.displayAppliance(
          this.searchModel.getAppliances("", tags)
        );
        this.allDisplay.displayUstensil(
          this.searchModel.getUstensils("", tags)
        );
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
          this.searchModel.searchIngredientList(ingredientInput.value, tags)
        );
      } else {
        menuIngredients.innerHTML = "";
        this.allDisplay.displayIngredient(
          this.searchModel.getIngredients("", tags)
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
          this.searchModel.searchApplianceList(applianceInput.value, tags)
        );
      } else {
        menuAppliances.innerHTML = "";
        this.allDisplay.displayAppliance(
          this.searchModel.getAppliances("", tags)
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
          this.searchModel.searchUstensilList(ustensilInput.value, tags)
        );
      } else {
        menuUstensils.innerHTML = "";
        this.allDisplay.displayUstensil(
          this.searchModel.getUstensils("", tags)
        );
      }
    });
  }
}
