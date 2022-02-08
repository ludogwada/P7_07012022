export class TagList {
  tags = [];

  add(tag) {
    this.tags.push(tag);
  }

  delete(tag) {
    this.tags.forEach(item, (index) => {
      if (item == tag) {
        this.tags.splice(index, 1);
      }
    });
  }

  getTags() {
    return this.tags;
  }
}

// function addTag() {
//   let tagArray = [];

//   for (let selectIngredient of selectI) {
//     selectIngredient.addEventListener('click', () => {
//       const tagSelectI = document.createElement('li');
//       tagSelectI.setAttribute('class', 'tag bg-blue');
//       tagArray.push(selectIngredient.innerHTML);
//       console.log(tagArray);

//       const tagText = document.createElement('p');
//       tagText.setAttribute('class', 'mb-0 tag__text');
//       tagText.innerHTML = `${selectIngredient.innerHTML}`;

//       const tagIcon = document.createElement('i');
//       tagIcon.setAttribute('class', 'mx-1 far fa-times-circle fa-2x');
//       tagIcon.addEventListener('click', () => {
//         tags.removeChild(tagSelectI);
//         tagArray.forEach((item, index) => {
//           if (item == selectIngredient.textContent) {
//             tagArray.splice(index, 1);
//           }
//         });
//       });
//       tags.appendChild(tagSelectI);
//       tagSelectI.appendChild(tagText);
//       tagSelectI.appendChild(tagIcon);
//     });
//   }

//   for (let selectAppliance of selectA) {
//     selectAppliance.addEventListener('click', () => {
//       const tagSelectA = document.createElement('li');
//       tagSelectA.setAttribute('class', 'tag bg-green');
//       tagArray.push(selectAppliance.innerHTML);

//       const tagText = document.createElement('p');
//       tagText.setAttribute('class', 'mb-0 tag__text');
//       tagText.innerHTML = `${selectAppliance.innerHTML}`;

//       const tagIcon = document.createElement('i');
//       tagIcon.setAttribute('class', 'mx-1 far fa-times-circle fa-2x');
//       tagIcon.addEventListener('click', () => {
//         tags.removeChild(tagSelectA);
//         tagArray.forEach((item, index) => {
//           if (item == selectAppliance.textContent) {
//             tagArray.splice(index, 1);
//           }
//         });
//       });
//       tags.appendChild(tagSelectA);
//       tagSelectA.appendChild(tagText);
//       tagSelectA.appendChild(tagIcon);
//     });
//   }

//   for (let selectUstensil of selectU) {
//     selectUstensil.addEventListener('click', () => {
//       const tagSelectU = document.createElement('li');
//       tagSelectU.setAttribute('class', 'tag bg-red');
//       tagArray.push(selectUstensil.innerHTML);

//       const tagText = document.createElement('p');
//       tagText.setAttribute('class', 'mb-0 tag__text');
//       tagText.innerHTML = `${selectUstensil.innerHTML}`;

//       const tagIcon = document.createElement('i');
//       tagIcon.setAttribute('class', 'mx-1 far fa-times-circle fa-2x');
//       tagIcon.addEventListener('click', () => {
//         tags.removeChild(tagSelectU);
//         tagArray.forEach((item, index) => {
//           if (item == selectUstensil.textContent) {
//             tagArray.splice(index, 1);
//           }
//         });
//       });

//       tags.appendChild(tagSelectU);
//       tagSelectU.appendChild(tagText);
//       tagSelectU.appendChild(tagIcon);
//     });
//   }
// }

// addTag();
