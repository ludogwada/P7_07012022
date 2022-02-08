export class Tags {
  constructor() {
    this.tags = document.getElementById('tags');
  }
  createTag(color, value) {
    let tag = document.createElement('li');
    let tagText = document.createElement('p');
    let tagIcon = document.createElement('i');
    tag.classList.add('tag');
    tag.classList.add('bg-' + color);

    tagText.setAttribute('class', 'mb-0 tag__text');
    tagText.innerHTML = value;

    tagIcon.setAttribute('class', 'mx-1 far fa-times-circle fa-lg js-cross');
    tagIcon.setAttribute('type', 'button');

    this.tags.appendChild(tag);
    tag.appendChild(tagText);
    tag.appendChild(tagIcon);
  }

  createListTag(element, list, item) {
    list.innerHTML = '';
    element.forEach((e) => {
      this.listElement = document.createElement('li');
      this.listElement.setAttribute(
        'class',
        'dropdown-item text-white overflow-hidden'
      );
      this.listElement.classList.add(item);
      this.listElement.setAttribute('style', 'width: 190px');
      this.listElement.innerHTML = `${e}`;
      list.appendChild(this.listElement);
    });
  }
}
