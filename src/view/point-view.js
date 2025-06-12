import AbstractView from "../framework/view/abstract-view.js";
import { createElement } from "../render.js";
import {
  extractTimeDueDate,
  humanizePointDueDate,
  isPointFavorite,
} from "../utils.js";

function createPoint(point, destinations, offers) {
  const {
    id,
    basePrice,
    dateFrom,
    dateTo,
    isFavorite,
    destination,
    offers: offersPoint,
    type,
  } = point;
  const pointDestination = destinations.find((dest) => dest.id == destination);
  const { name } = pointDestination;
  const typeOffers = offers.find((off) => off.type == type).offers;
  const pointOffers = typeOffers.filter((typeOffer) =>
    offersPoint.includes(typeOffer.id)
  );
  const favoriteClassName = isPointFavorite(isFavorite)
    ? "event__favorite-btn--active"
    : "";
  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">${humanizePointDueDate(
                  dateFrom
                )}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type} ${name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dateFrom}">${extractTimeDueDate(
    dateFrom
  )}</time>
                    —
                    <time class="event__end-time" datetime="${dateTo}">${extractTimeDueDate(
    dateTo
  )}</time>
                  </p>
                  <p class="event__duration">40M</p>
                </div>
                <p class="event__price">
                  €&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                                  ${pointOffers.map(
                                    (offer) =>
                                      `<li class="event__offer">
                    <span class="event__offer-title">${offer.title}</span>
                    +€&nbsp;
                    <span class="event__offer-price">${offer.price}</span>
                  </li>`
                                  )}
                </ul>
                <button class="event__favorite-btn ${favoriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
}

export class PointView extends AbstractView {
  #handleEditClick = null;

  constructor(point, destinations, offers, onEditClick) {
    super();
    this.point = point;
    this.destinations = destinations;
    this.offers = offers;
    this.#handleEditClick = onEditClick;
    this.editButton = this.element.querySelector(".event__rollup-btn");
    this.editButton.addEventListener("click", this.#clickHandler);
  }

  get template() {
    return createPoint(this.point, this.destinations, this.offers);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}
