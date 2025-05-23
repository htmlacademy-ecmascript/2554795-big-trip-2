import { getRandomArrayElement } from "../utils";

const mockPoint = [
  {
    date: "11.10.2025",
    destination: {
      name: "Geneva",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photos: "",
    },
    type: "Taxi",
    timeStart: "11.00",
    timeEnd: "12.00",
    price: "30",
    offers: [
      { name: "Order uber", price: "10" },
      { name: "Order business taxi", price: "50" },
    ],
    favorite: true,
  },
  {
    date: "03.03.2024",
    destination: {
      name: "Moscow",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photos: "https://loremflickr.com/248/152?random=99",
    },
    type: "Bus",
    timeStart: "11.00",
    timeEnd: "12.00",
    price: "70",
    offers: {},
    favorite: true,
  },
  {
    date: "11.12.2025",
    destination: {
      name: "New York",
      description:
        " Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. .",
      photos: "https://loremflickr.com/248/152?random=12",
    },
    type: "ship",
    timeStart: "11.00",
    timeEnd: "12.00",
    price: "100",
    offers: [{ name: "Switch to comfort", price: "100" }],
    favorite: true,
  },
  {
    date: "05.05.2025",
    destination: {
      name: "Paris",
      description:
        "Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. ",
      photos:
        "https://loremflickr.com/248/152?random=13,https://loremflickr.com/248/152?random=44, https://loremflickr.com/248/152?random=444",
    },
    type: "Flight",
    timeStart: "11.00",
    timeEnd: "12.00",
    price: "30",
    offers: [
      { name: "Upgrade to First Class", price: "1000" },
      { name: "Upgrade to Business Class", price: "300" },
      { name: "Upgrade to Comfort Class", price: "100" },
    ],
    favorite: false,
  },
  {
    date: "01.01.2025",
    destination: {
      name: "Barcelona",
      description: "In rutrum ac purus sit amet tempus.",
      photos:
        "https://loremflickr.com/248/152?random=1, https://loremflickr.com/248/152?random=2",
    },
    type: "Check-in",
    timeStart: "11.00",
    timeEnd: "12.00",
    price: "20",
    offers: [{ name: "Add breakfast", price: "20" }],
    favorite: false,
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoint);
}

export { getRandomPoint };
