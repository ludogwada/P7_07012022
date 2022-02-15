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
  }

  /*EVENT LISTENER*/
  eventSearchBar() {
    let searchInput = document.querySelector("#search");
    searchInput.addEventListener("input", () => {
      if (searchInput.value.length >= 3) {
        this.allDisplay.search(searchInput.value);
      } else {
        this.searchResult.innerHTML = "";
        this.card.recipeDisplay(recipes);
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
          this.searchModel.searchIngredientList(ingredientInput.value)
        );
      } else {
        menuIngredients.innerHTML = "";
        this.allDisplay.displayIngredient(this.searchModel.getIngredients());
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
          this.searchModel.searchApplianceList(applianceInput.value)
        );
      } else {
        menuAppliances.innerHTML = "";
        this.allDisplay.displayAppliance(this.searchModel.getAppliances());
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
          this.searchModel.searchUstensilList(ustensilInput.value)
        );
      } else {
        menuUstensils.innerHTML = "";
        this.allDisplay.displayUstensil(this.searchModel.getUstensils());
      }
    });
  }

  // AddTag() {
  //   this.filterTag = [];
  //   let blueColor = 'blue';
  //   let greenColor = 'green';
  //   let redColor = 'red';
  //   let dropdownEl = document.querySelectorAll('.dropdown-item');
  //   for (let element of dropdownEl) {
  //     element.addEventListener('click', (e) => {
  //       if (element.classList[3] == 'ingredient-item') {
  //         this.tags.createTag(blueColor, element.innerHTML);
  //       } else if (element.classList[3] == 'appliance-item') {
  //         this.tags.createTag(greenColor, element.innerHTML);
  //       } else if (element.classList[3] == 'ustensil-item') {
  //         this.tags.createTag(redColor, element.innerHTML);
  //       }
  //       this.searchResult.innerHTML = '';
  //       this.tagList.add(element);
  //       this.filterTag = this.datarecipe.searchByTag(element.innerHTML);
  //       this.recipe(this.filterTag);
  //     });
  //   }
  // }
}
