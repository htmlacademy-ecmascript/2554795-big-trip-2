import { AddNewPoint } from "../view/add-new-point-view.js";
import { EditorPoint } from "../view/edit-point-view.js";
import { PointViewer } from "../view/point-view.js";
import { render } from "../render.js";
import { points } from "../mock/points.js";
import { destinations } from "../mock/destinations.js";
import { offers } from "../mock/offers.js";

export default class ListPresenter {
  addPointComponent = new AddNewPoint();

  constructor({ listContainer }) {
    this.listContainer = listContainer;
  }

  init() {
    this.points = points;
    this.destinations = destinations;
    this.offers = offers;

    render(
      new EditorPoint(this.points[0], this.destinations, this.offers),
      this.listContainer
    );
    render(this.addPointComponent, this.listContainer);

    for (const point of this.points) {
      render(new PointViewer(point, destinations, offers), this.listContainer);
    }
  }
}
