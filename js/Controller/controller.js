import { recipes } from '../../data/recipes.js';
import { DataRecipe } from '../models/model-search.js';
import { DataDropdown } from '../models/model-dropdown.js';
import { AllDisplay } from '../Vue/Display.js';
import { TagList } from '../models/tagList.js';
import { Card } from '../Vue/Card.js';
import { Tags } from '../Vue/Tags.js';

let listI = [];
let listA = [];
let listU = [];

class Control {
  constructor() {
    this.tagList = new TagList();
    this.card = new Card();
    this.tags = new Tags();
    this.allDisplay = new AllDisplay();
    this.datarecipe = new DataRecipe();
    this.dataDropdown = new DataDropdown();
    this.searchInput = document.querySelector('#search');
    this.searchResult = document.querySelector('.js-card');
    this.ingredientInput = document.getElementById('inputIngredient');
    this.applianceInput = document.getElementById('inputAppliance');
    this.ustensilInput = document.getElementById('inputUstensil');
    this.filteredArray = [];
    this.filterTag = [];
  }
  recipe(recipe) {
    this.allDisplay.display(recipe);
    listI = this.dataDropdown.listTagIngredients(recipe);
    listA = this.dataDropdown.listTagAppliance(recipe);
    listU = this.dataDropdown.listTagUstensils(recipe);
    this.allDisplay.displayIngredient(listI);
    this.allDisplay.displayAplliance(listA);
    this.allDisplay.displayUstensil(listU);
  }
  /*FILTER*/
  filterData() {
    if (this.searchInput.value.length >= 3) {
      if (this.filterTag.length === 0) {
        this.filteredArray = this.datarecipe.search(
          this.searchInput.value,
          recipes
        );
      } else if (this.filterTag.length) {
        this.filteredArray = this.datarecipe.search(
          this.searchInput.value,
          this.filterTag
        );
      }
      if (this.filteredArray.length === 0) {
        this.card.NoCard(this.searchResult);
      }
      this.recipe(this.filteredArray);
    } else if (this.searchInput.value.length === 0) {
      if (this.filterTag.length === 0) this.recipe(recipes);
      else {
        this.recipe(this.filterTag);
      }
    }
  }

  /*EVENT LISTENER*/
  eventSearchBar() {
    this.searchInput.addEventListener('input', (e) => {
      this.searchResult.innerHTML = '';
      this.filterData(recipes);
    });
  }
  eventIngredient() {
    this.ingredientInput.addEventListener('input', () => {
      listI = this.dataDropdown.searchListIngredient(
        this.ingredientInput.value
      );
      this.allDisplay.displayIngredient(listI);
    });
  }
  eventAppliance() {
    this.applianceInput.addEventListener('input', () => {
      listA = this.dataDropdown.searchListAppliance(this.applianceInput.value);
      this.allDisplay.displayAplliance(listA);
    });
  }
  eventUstensil() {
    this.ustensilInput.addEventListener('input', () => {
      listU = this.dataDropdown.searchListUstensil(this.ustensilInput.value);
      this.allDisplay.displayUstensil(listU);
    });
  }
  eventAddTag() {
    this.filterTag = [];
    let blueColor = 'blue';
    let selectI = document.querySelectorAll('.ingredient-item');
    for (let ingredient of selectI) {
      ingredient.addEventListener('click', () => {
        this.searchResult.innerHTML = '';
        this.tagList.add(ingredient);
        this.tags.createTag(blueColor, ingredient.innerHTML);
        this.filterTag = this.datarecipe.searchByTag(ingredient.innerHTML);
        this.recipe(this.filterTag);
      });
    }
  }
  deleteTag() {
    let cross = document.querySelectorAll('.js-cross');
    for (let close of cross) {
      close.addEventListener('click', () => {});
    }
  }
}
const control = new Control();
control.recipe(recipes);
control.eventSearchBar();
control.eventIngredient();
control.eventAppliance();
control.eventUstensil();
control.eventAddTag();
control.deleteTag();
// console.log(listI);
