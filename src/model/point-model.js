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

  get points() {
    return this.points;
  }

  get destinations() {
    return this.destinations;
  }

  get offers() {
    return this.offers;
  }
}
