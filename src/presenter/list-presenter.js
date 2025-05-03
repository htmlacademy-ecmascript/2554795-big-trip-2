import { AddNewPoint } from "../view/add-new-point-view.js";
import { EditorPoint } from "../view/edit-point-view.js";
import { PointViewer } from "../view/point-view.js";
import { render } from "../render.js";

export default class ListPresenter {
  addPointComponent = new AddNewPoint();
  editPointComponent = new EditorPoint();

  constructor({ listContainer }) {
    this.listContainer = listContainer;
  }

  init() {
    render(this.editPointComponent, this.listContainer);
    render(this.addPointComponent, this.listContainer);

    for (let i = 0; i < 3; i++) {
      render(new PointViewer(), this.listContainer);
    }
  }
}
