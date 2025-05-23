import dayjs from "dayjs";

const DATE_FORMAT = "D MMM";
const DATE_FORMAT_TO_HTML = "YYYY DD MM";
const DATE_FORMAT_TIME = "HH:MM";
const DATE_FORMAT_TO_EDIT_FORM = "DD/MM/YY HH:MM";

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizePointDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : "";
}

function extractTimeDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT_TIME) : "";
}

function toEditFormDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT_TO_EDIT_FORM) : "";
}
//18/03/19 12:25
//2019-05-15T22:55:56.845Z

function toHtmlPointDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT_TO_HTML) : "";
}

function isPointFavorite(point) {
  if (point) {
    return true;
  } else {
    return false;
  }
}

export {
  getRandomArrayElement,
  humanizePointDueDate,
  extractTimeDueDate,
  toHtmlPointDueDate,
  isPointFavorite,
  toEditFormDueDate,
};
