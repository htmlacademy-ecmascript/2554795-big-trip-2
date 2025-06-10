import AbstractView from "../framework/view/abstract-view.js";

function createElementList() {
  return `<ul class="trip-events__list"></ul>`;
}

export class ElementListView extends AbstractView {
  get template() {
    return createElementList();
  }
}
