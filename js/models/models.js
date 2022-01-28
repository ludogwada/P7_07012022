import { recipes } from '../../data/recipes.js';

export class DataRecipe {
  constructor() {
    this.datas = recipes;
  }

  getDatas() {
    /*
    
    tri_à_bulles_optimisé(Tableau T)
    pour i allant de (taille de T)-1 à 1
    tableau_trié := vrai
    pour j allant de 0 à i-1
    si T[j+1] < T[j]
    (T[j+1], T[j]) = (T[j], T[j+1])
    tableau_trié := faux
    si tableau_trié
    fin tri_à_bulles_optimisé
    */

    for (let index = 0; index < this.datas.length; index++) {
      console.log();
      let tableau_trie = true;
      for (let j = 0; j < index - 1; j++) {
        if (this.datas[j + 1] < this.datas[j]) {
          this.datas[j + 1] = this.datas[j];
          this.datas[j] = this.datas[j + 1];
          tableau_trie = false;
        }
      }
      if (tableau_trie) {
        break;
      }
    }

    return this.datas;
  }

  search(motRecherche) {
    let motTrouve = [];
    motTrouve = this.datas.filter(
      (el) =>
        el.name.toLowerCase().includes(motRecherche) ||
        el.description.toLowerCase().includes(motRecherche) ||
        el.ingredients.find((unIngredient) =>
          unIngredient.ingredient.toLowerCase().includes(motRecherche)
        )
    );
    return motTrouve;
  }
}
