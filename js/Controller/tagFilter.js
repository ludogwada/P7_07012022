const tags = document.getElementById('tags');
const selectI = document.querySelectorAll('.ingredient-item');
const selectA = document.querySelectorAll('.appareil-item');
const selectU = document.querySelectorAll('.ustensil-item');
const tagArray = [];

function addTag() {
  for (let selectIngredient of selectI) {
    selectIngredient.addEventListener('click', () => {
      const tagSelectI = document.createElement('li');
      tagSelectI.setAttribute('class', 'tag bg-blue');
      tagArray.push(selectIngredient.innerHTML);

      const tagText = document.createElement('p');
      tagText.setAttribute('class', 'mb-0 tag__text');
      tagText.innerHTML = `${selectIngredient.innerHTML}`;

      const tagIcon = document.createElement('i');
      tagIcon.setAttribute('class', 'mx-1 far fa-times-circle');
      tags.appendChild(tagSelectI);
      tagSelectI.appendChild(tagText);
      tagSelectI.appendChild(tagIcon);
    });
  }
  for (let selectAppareil of selectA) {
    selectAppareil.addEventListener('click', () => {
      const tagSelectA = document.createElement('li');
      tagSelectA.setAttribute('class', 'tag bg-green');
      tagArray.push(selectAppareil.innerHTML);

      const tagText = document.createElement('p');
      tagText.setAttribute('class', 'mb-0 tag__text');
      tagText.innerHTML = `${selectAppareil.innerHTML}`;

      const tagIcon = document.createElement('i');
      tagIcon.setAttribute('class', 'mx-1 far fa-times-circle');
      tags.appendChild(tagSelectA);
      tagSelectA.appendChild(tagText);
      tagSelectA.appendChild(tagIcon);
    });
  }
  for (let selectUstensil of selectU) {
    selectUstensil.addEventListener('click', () => {
      const tagSelectU = document.createElement('li');
      tagSelectU.setAttribute('class', 'tag bg-red');
      tagArray.push(selectUstensil.innerHTML);

      const tagText = document.createElement('p');
      tagText.setAttribute('class', 'mb-0 tag__text');
      tagText.innerHTML = `${selectUstensil.innerHTML}`;

      const tagIcon = document.createElement('i');
      tagIcon.setAttribute('class', 'mx-1 far fa-times-circle');

      tags.appendChild(tagSelectU);
      tagSelectU.appendChild(tagText);
      tagSelectU.appendChild(tagIcon);
    });
  }
}
addTag();

const tagFilter = document.querySelectorAll('.tag');
console.log(tagArray);
