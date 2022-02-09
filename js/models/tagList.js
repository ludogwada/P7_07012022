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
