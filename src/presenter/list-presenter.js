import { AddNewPoint } from "../view/add-new-point-view.js";
import { EditorPoint } from "../view/edit-point-view.js";
import { PointViewer } from "../view/point-view.js";
import { points } from "../mock/points.js";
import { destinations } from "../mock/destinations.js";
import { offers } from "../mock/offers.js";
import { render, replace } from "../framework/render.js";

export default class ListPresenter {
  #addPointComponent = new AddNewPoint();

  #points = null;
  #destinations = null;
  #offers = null;

  #listContainer = null;

  constructor({ listContainer }) {
    this.#listContainer = listContainer;
  }

  init() {
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;

    render(this.#addPointComponent, this.#listContainer);

    for (const point of this.#points) {
      this.#renderPoint(point, this.#destinations, this.#offers);
    }
  }
  #renderPoint(point, destinations, offers) {
    function replaceCardToEditForm() {
      replace(currentEditForm, currentPoint);
    }

    function replaceEditFormToCard() {
      replace(currentPoint, currentEditForm);
    }

    const escKeyDownHandler = (evt) => {
      if (evt.key === "Escape") {
        evt.preventDefault();
        replaceEditFormToCard();
        document.removeEventListener("keydown", escKeyDownHandler);
      }
    };

    this.onEditClick = () => {
      replaceCardToEditForm();
      document.addEventListener("keydown", escKeyDownHandler);
    };

    this.onSaveClick = () => {
      replaceEditFormToCard();
    };

    const currentPoint = new PointViewer(
      point,
      destinations,
      offers,
      this.onEditClick
    );
    render(currentPoint, this.#listContainer);

    const currentEditForm = new EditorPoint(
      point,
      destinations,
      offers,
      this.onSaveClick
    );
  }
}
