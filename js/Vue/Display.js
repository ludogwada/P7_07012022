import { DataDropdown } from '../models/model-dropdown.js';
import { Card } from './Card.js';
import { Tags } from './Tags.js';

export class AllDisplay {
  constructor() {
    this.dataDropdown = new DataDropdown();
    this.list1 = document.querySelector('.menu1');
    this.list2 = document.querySelector('.menu2');
    this.list3 = document.querySelector('.menu3');

    this.cardDisplay = new Card();
    this.tagsDisplay = new Tags();
  }

  displayIngredient(listI) {
    this.tagsDisplay.createListTag(listI, this.list1, 'ingredient-item');
  }

  displayAplliance(listA) {
    this.tagsDisplay.createListTag(listA, this.list2, 'appliance-item');
  }

  displayUstensil(listU) {
    this.tagsDisplay.createListTag(listU, this.list3, 'ustensil-item');
  }

  display(recipeList) {
    this.cardDisplay.recipeDisplay(recipeList);
  }
}
