// import { getRandomPoint } from "../mock/point-old";
import { points } from "../mock/points";
import { offers } from "../mock/offers";
import { destinations } from "../mock/destinations";

export default class PointModel {
  constructor() {
    this.points = [];
    this.destinations = [];
    this.offers = [];
  }

  init() {
    this.points = points;
    this.destinations = destinations;
    this.offers = offers;
  }

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
