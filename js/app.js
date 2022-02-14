import { AllDisplay } from "./Controller/Display.js";
import { Control } from "./Controller/controller.js";
import { Card } from "./Controller/Card.js";
import { recipes } from "../data/recipes.js";

class App {
  constructor() {
    this.control = new Control();
    this.display = new AllDisplay();
    this.card = new Card();
  }

  main() {
    this.card.recipeDisplay(recipes);
    this.control.eventSearchBar();
    this.display.displayIngredient();
    this.display.displayAplliance();
    this.display.displayUstensils();
  }
}

const app = new App();
app.main();
