import { POINT_TYPES } from "../const.js";
import AbstractView from "../framework/view/abstract-view.js";
import { toEditFormDueDate } from "../utils.js";

const firstLetterUp = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

function createEditPoint(point, destinations, offers) {
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

  const typeOffers = offers.find((off) => off.type == type).offers;

  return `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                      ${POINT_TYPES.map(
                        (pointType) =>
                          ` <div class="event__type-item">
                          <input id="event-type-${pointType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${pointType}" ${
                            pointType == type ? "checked" : ""
                          }>
                          <label class="event__type-label  event__type-label--${pointType}" for="event-type-${pointType}-1">${firstLetterUp(
                            pointType
                          )}</label>
                        </div>`
                      ).join("")}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${
                      pointDestination.name
                    }" list="destination-list-1">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${toEditFormDueDate(
                      dateFrom
                    )}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${toEditFormDueDate(
                      dateTo
                    )}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">

${typeOffers
  .map(
    (mainOffer) =>
      `          <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${
                          mainOffer.title
                        }-1" type="checkbox" name="event-offer-${
        mainOffer.title
      }"
        ${offersPoint.includes(mainOffer.id) ? "checked" : ""}

    >
                        <label class="event__offer-label" for="event-offer-${
                          mainOffer.title
                        }-1">
                          <span class="event__offer-title">${
                            mainOffer.title
                          }</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${
                            mainOffer.price
                          }</span>
                        </label>
                      </div>`
  )
  .join("")}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${
                      pointDestination.description
                    }</p>
                  </section>
                </section>
              </form></li>`;
}

export class EditorPoint extends AbstractView {
  #handleSaveClick = null;

  constructor(point, destinations, offers, onSaveClick) {
    super();
    this.point = point;
    this.destinations = destinations;
    this.offers = offers;
    this.#handleSaveClick = onSaveClick;
    this.hideButton = this.element.querySelector(".event__rollup-btn");
    this.hideButton.addEventListener("click", this.#clickHandler);
    this.saveButton = this.element.querySelector(".event__save-btn");
    this.saveButton.addEventListener("click", this.#clickHandler);
  }

  get template() {
    return createEditPoint(this.point, this.destinations, this.offers);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleSaveClick();
  };
}
