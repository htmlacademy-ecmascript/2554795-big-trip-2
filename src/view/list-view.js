import { createElement } from "../render.js";

function createElementList() {
  return `<ul class="trip-events__list"></ul>`;
}

export class ElementListView {
  getTemplate() {
    return createElementList();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
