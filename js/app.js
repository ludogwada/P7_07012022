import { AllDisplay } from "./Controller/Display.js";
import { Control } from "./Controller/controller.js";
import { Card } from "./Controller/Card.js";
import { recipes } from "../data/recipes.js";
import { SearchModel } from "./models/searchModel.js";

class App {
  constructor() {
    this.searchModels = new SearchModel();
    this.control = new Control();
    this.display = new AllDisplay();
    this.card = new Card();
  }

  main() {
    this.card.recipeDisplay(recipes);
    this.display.displayIngredient(this.searchModels.getIngredients("", ""));
    this.display.displayAppliance(this.searchModels.getAppliances("", ""));
    this.display.displayUstensil(this.searchModels.getUstensils("", ""));
  }
  search() {
    this.control.eventSearchBar();
    this.control.eventIngredient();
    this.control.eventAppliance();
    this.control.eventUstensil();
    this.control.addTag();
    this.control.removeTag();
  }
}

const app = new App();
app.main();
app.search();
