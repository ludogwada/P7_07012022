import { AllDisplay } from "./Controller/Display.js";
import { Control } from "./Controller/controller.js";
import { Card } from "./Controller/Card.js";
import { recipes } from "../data/recipes.js";
import { SearchModel } from "./models/searchModel.js";

class App {
  constructor() {
    this.searchModel = new SearchModel();
    this.control = new Control();
    this.display = new AllDisplay();
    this.card = new Card();
  }

  main() {
    this.card.recipeDisplay(recipes);
    this.display.displayIngredient(this.searchModel.getIngredients("", ""));
    this.display.displayAppliance(this.searchModel.getAppliances("", ""));
    this.display.displayUstensil(this.searchModel.getUstensils("", ""));
  }
  search() {
    this.control.eventSearchBar();
    this.control.eventIngredient();
    this.control.eventAppliance();
    this.control.eventUstensil();
  }
}

const app = new App();
app.main();
app.search();
