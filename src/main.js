import { FiltersView } from "./view/filters-view.js";
import { SortView } from "./view/sort-view.js";
import ListPresenter from "./presenter/list-presenter.js";
import { ElementListView } from "./view/list-view.js";
import { render } from "./framework/render.js";

const tripMain = document.querySelector(".trip-main");
render(new FiltersView(), tripMain);

const tripEvents = document.querySelector(".trip-events");
render(new SortView(), tripEvents);
render(new ElementListView(), tripEvents);

const tripEventsList = document.querySelector(".trip-events__list");
const listPresenter = new ListPresenter({ listContainer: tripEventsList });
listPresenter.init();
