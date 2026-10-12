const cards = [
  // =========================
  // LEVEL 1
  // =========================

  // Black
  {
    id: 1,
    level: 1,
    price: { white: 1, blue: 1, green: 1, red: 1, black: 0 },
    resource: 'black',
    points: 0,
  },
  {
    id: 2,
    level: 1,
    price: { white: 1, blue: 1, green: 1, red: 2, black: 0 },
    resource: 'black',
    points: 0,
  },
  {
    id: 3,
    level: 1,
    price: { white: 2, blue: 0, green: 1, red: 2, black: 0 },
    resource: 'black',
    points: 0,
  },
  {
    id: 4,
    level: 1,
    price: { white: 0, blue: 1, green: 0, red: 3, black: 1 },
    resource: 'black',
    points: 0,
  },
  {
    id: 5,
    level: 1,
    price: { white: 0, blue: 0, green: 2, red: 1, black: 0 },
    resource: 'black',
    points: 0,
  },
  {
    id: 6,
    level: 1,
    price: { white: 2, blue: 0, green: 2, red: 0, black: 0 },
    resource: 'black',
    points: 0,
  },
  {
    id: 7,
    level: 1,
    price: { white: 0, blue: 0, green: 3, red: 0, black: 0 },
    resource: 'black',
    points: 0,
  },
  {
    id: 8,
    level: 1,
    price: { white: 0, blue: 4, green: 0, red: 0, black: 0 },
    resource: 'black',
    points: 1,
  },

  // Blue
  {
    id: 9,
    level: 1,
    price: { white: 1, blue: 0, green: 1, red: 1, black: 1 },
    resource: 'blue',
    points: 0,
  },
  {
    id: 10,
    level: 1,
    price: { white: 1, blue: 0, green: 1, red: 2, black: 1 },
    resource: 'blue',
    points: 0,
  },
  {
    id: 11,
    level: 1,
    price: { white: 1, blue: 0, green: 2, red: 2, black: 0 },
    resource: 'blue',
    points: 0,
  },
  {
    id: 12,
    level: 1,
    price: { white: 0, blue: 0, green: 3, red: 1, black: 0 },
    resource: 'blue',
    points: 0,
  },
  {
    id: 13,
    level: 1,
    price: { white: 1, blue: 2, green: 0, red: 0, black: 0 },
    resource: 'blue',
    points: 0,
  },
  {
    id: 14,
    level: 1,
    price: { white: 2, blue: 0, green: 2, red: 0, black: 0 },
    resource: 'blue',
    points: 0,
  },
  {
    id: 15,
    level: 1,
    price: { white: 0, blue: 0, green: 3, red: 0, black: 0 },
    resource: 'blue',
    points: 0,
  },
  {
    id: 16,
    level: 1,
    price: { white: 0, blue: 0, green: 0, red: 4, black: 0 },
    resource: 'blue',
    points: 1,
  },

  // White
  {
    id: 17,
    level: 1,
    price: { white: 0, blue: 1, green: 1, red: 1, black: 1 },
    resource: 'white',
    points: 0,
  },
  {
    id: 18,
    level: 1,
    price: { white: 0, blue: 1, green: 2, red: 1, black: 1 },
    resource: 'white',
    points: 0,
  },
  {
    id: 19,
    level: 1,
    price: { white: 0, blue: 0, green: 2, red: 2, black: 1 },
    resource: 'white',
    points: 0,
  },
  {
    id: 20,
    level: 1,
    price: { white: 1, blue: 1, green: 0, red: 0, black: 3 },
    resource: 'white',
    points: 0,
  },
  {
    id: 21,
    level: 1,
    price: { white: 0, blue: 1, green: 0, red: 2, black: 0 },
    resource: 'white',
    points: 0,
  },
  {
    id: 22,
    level: 1,
    price: { white: 0, blue: 2, green: 2, red: 0, black: 0 },
    resource: 'white',
    points: 0,
  },
  {
    id: 23,
    level: 1,
    price: { white: 0, blue: 0, green: 0, red: 3, black: 0 },
    resource: 'white',
    points: 0,
  },
  {
    id: 24,
    level: 1,
    price: { white: 1, blue: 0, green: 0, red: 4, black: 0 },
    resource: 'white',
    points: 1,
  },

  // Green
  {
    id: 25,
    level: 1,
    price: { white: 1, blue: 1, green: 0, red: 1, black: 1 },
    resource: 'green',
    points: 0,
  },
  {
    id: 26,
    level: 1,
    price: { white: 1, blue: 1, green: 0, red: 1, black: 2 },
    resource: 'green',
    points: 0,
  },
  {
    id: 27,
    level: 1,
    price: { white: 2, blue: 1, green: 0, red: 2, black: 0 },
    resource: 'green',
    points: 0,
  },
  {
    id: 28,
    level: 1,
    price: { white: 1, blue: 0, green: 0, red: 3, black: 1 },
    resource: 'green',
    points: 0,
  },
  {
    id: 29,
    level: 1,
    price: { white: 0, blue: 0, green: 1, red: 0, black: 2 },
    resource: 'green',
    points: 0,
  },
  {
    id: 30,
    level: 1,
    price: { white: 0, blue: 0, green: 2, red: 0, black: 2 },
    resource: 'green',
    points: 0,
  },
  {
    id: 31,
    level: 1,
    price: { white: 0, blue: 0, green: 0, red: 3, black: 0 },
    resource: 'green',
    points: 0,
  },
  {
    id: 32,
    level: 1,
    price: { white: 0, blue: 0, green: 0, red: 0, black: 4 },
    resource: 'green',
    points: 1,
  },

  // Red
  {
    id: 33,
    level: 1,
    price: { white: 1, blue: 1, green: 1, red: 0, black: 1 },
    resource: 'red',
    points: 0,
  },
  {
    id: 34,
    level: 1,
    price: { white: 2, blue: 1, green: 1, red: 0, black: 1 },
    resource: 'red',
    points: 0,
  },
  {
    id: 35,
    level: 1,
    price: { white: 2, blue: 0, green: 1, red: 0, black: 2 },
    resource: 'red',
    points: 0,
  },
  {
    id: 36,
    level: 1,
    price: { white: 1, blue: 3, green: 0, red: 0, black: 1 },
    resource: 'red',
    points: 0,
  },
  {
    id: 37,
    level: 1,
    price: { white: 0, blue: 0, green: 2, red: 1, black: 0 },
    resource: 'red',
    points: 0,
  },
  {
    id: 38,
    level: 1,
    price: { white: 0, blue: 0, green: 2, red: 0, black: 2 },
    resource: 'red',
    points: 0,
  },
  {
    id: 39,
    level: 1,
    price: { white: 0, blue: 0, green: 0, red: 0, black: 3 },
    resource: 'red',
    points: 0,
  },
  {
    id: 40,
    level: 1,
    price: { white: 0, blue: 0, green: 0, red: 0, black: 4 },
    resource: 'red',
    points: 1,
  },

  // =========================
  // LEVEL 2
  // =========================

  // Black
  {
    id: 41,
    level: 2,
    price: { white: 3, blue: 2, green: 2, red: 0, black: 0 },
    resource: 'black',
    points: 1,
  },
  {
    id: 42,
    level: 2,
    price: { white: 3, blue: 2, green: 0, red: 0, black: 2 },
    resource: 'black',
    points: 1,
  },
  {
    id: 43,
    level: 2,
    price: { white: 0, blue: 1, green: 4, red: 2, black: 0 },
    resource: 'black',
    points: 2,
  },
  {
    id: 44,
    level: 2,
    price: { white: 0, blue: 0, green: 5, red: 3, black: 0 },
    resource: 'black',
    points: 2,
  },
  {
    id: 45,
    level: 2,
    price: { white: 5, blue: 0, green: 0, red: 0, black: 0 },
    resource: 'black',
    points: 2,
  },
  {
    id: 46,
    level: 2,
    price: { white: 0, blue: 0, green: 0, red: 0, black: 6 },
    resource: 'black',
    points: 3,
  },

  // Blue
  {
    id: 47,
    level: 2,
    price: { white: 0, blue: 2, green: 2, red: 3, black: 0 },
    resource: 'blue',
    points: 1,
  },
  {
    id: 48,
    level: 2,
    price: { white: 0, blue: 3, green: 2, red: 0, black: 3 },
    resource: 'blue',
    points: 1,
  },
  {
    id: 49,
    level: 2,
    price: { white: 5, blue: 0, green: 3, red: 0, black: 0 },
    resource: 'blue',
    points: 2,
  },
  {
    id: 50,
    level: 2,
    price: { white: 2, blue: 4, green: 0, red: 1, black: 0 },
    resource: 'blue',
    points: 2,
  },
  {
    id: 51,
    level: 2,
    price: { white: 0, blue: 0, green: 5, red: 0, black: 0 },
    resource: 'blue',
    points: 2,
  },
  {
    id: 52,
    level: 2,
    price: { white: 0, blue: 0, green: 0, red: 6, black: 0 },
    resource: 'blue',
    points: 3,
  },

  // White
  {
    id: 53,
    level: 2,
    price: { white: 0, blue: 0, green: 3, red: 2, black: 2 },
    resource: 'white',
    points: 1,
  },
  {
    id: 54,
    level: 2,
    price: { white: 2, blue: 0, green: 0, red: 3, black: 3 },
    resource: 'white',
    points: 1,
  },
  {
    id: 55,
    level: 2,
    price: { white: 0, blue: 0, green: 1, red: 4, black: 2 },
    resource: 'white',
    points: 2,
  },
  {
    id: 56,
    level: 2,
    price: { white: 0, blue: 3, green: 0, red: 5, black: 0 },
    resource: 'white',
    points: 2,
  },
  {
    id: 57,
    level: 2,
    price: { white: 0, blue: 0, green: 0, red: 0, black: 5 },
    resource: 'white',
    points: 2,
  },
  {
    id: 58,
    level: 2,
    price: { white: 0, blue: 0, green: 0, red: 0, black: 6 },
    resource: 'white',
    points: 3,
  },

  // Green
  {
    id: 59,
    level: 2,
    price: { white: 3, blue: 0, green: 0, red: 3, black: 2 },
    resource: 'green',
    points: 1,
  },
  {
    id: 60,
    level: 2,
    price: { white: 2, blue: 3, green: 0, red: 0, black: 2 },
    resource: 'green',
    points: 1,
  },
  {
    id: 61,
    level: 2,
    price: { white: 0, blue: 2, green: 0, red: 0, black: 4 },
    resource: 'green',
    points: 2,
  },
  {
    id: 62,
    level: 2,
    price: { white: 0, blue: 0, green: 0, red: 5, black: 3 },
    resource: 'green',
    points: 2,
  },
  {
    id: 63,
    level: 2,
    price: { white: 0, blue: 0, green: 5, red: 0, black: 0 },
    resource: 'green',
    points: 2,
  },
  {
    id: 64,
    level: 2,
    price: { white: 0, blue: 0, green: 0, red: 6, black: 0 },
    resource: 'green',
    points: 3,
  },

  // Red
  {
    id: 65,
    level: 2,
    price: { white: 2, blue: 0, green: 0, red: 2, black: 3 },
    resource: 'red',
    points: 1,
  },
  {
    id: 66,
    level: 2,
    price: { white: 2, blue: 0, green: 3, red: 0, black: 3 },
    resource: 'red',
    points: 1,
  },
  {
    id: 67,
    level: 2,
    price: { white: 1, blue: 0, green: 0, red: 4, black: 2 },
    resource: 'red',
    points: 2,
  },
  {
    id: 68,
    level: 2,
    price: { white: 0, blue: 0, green: 0, red: 3, black: 5 },
    resource: 'red',
    points: 2,
  },
  {
    id: 69,
    level: 2,
    price: { white: 0, blue: 0, green: 0, red: 0, black: 5 },
    resource: 'red',
    points: 2,
  },
  {
    id: 70,
    level: 2,
    price: { white: 0, blue: 0, green: 0, red: 6, black: 0 },
    resource: 'red',
    points: 3,
  },

  // =========================
  // LEVEL 3
  // =========================

  // Black
  {
    id: 71,
    level: 3,
    price: { white: 3, blue: 3, green: 5, red: 3, black: 0 },
    resource: 'black',
    points: 3,
  },
  {
    id: 72,
    level: 3,
    price: { white: 0, blue: 0, green: 7, red: 0, black: 0 },
    resource: 'black',
    points: 4,
  },
  {
    id: 73,
    level: 3,
    price: { white: 3, blue: 0, green: 0, red: 6, black: 3 },
    resource: 'black',
    points: 4,
  },
  {
    id: 74,
    level: 3,
    price: { white: 3, blue: 0, green: 0, red: 7, black: 0 },
    resource: 'black',
    points: 5,
  },

  // Blue
  {
    id: 75,
    level: 3,
    price: { white: 3, blue: 0, green: 3, red: 3, black: 5 },
    resource: 'blue',
    points: 3,
  },
  {
    id: 76,
    level: 3,
    price: { white: 7, blue: 0, green: 0, red: 0, black: 0 },
    resource: 'blue',
    points: 4,
  },
  {
    id: 77,
    level: 3,
    price: { white: 6, blue: 3, green: 0, red: 0, black: 3 },
    resource: 'blue',
    points: 4,
  },
  {
    id: 78,
    level: 3,
    price: { white: 7, blue: 0, green: 0, red: 0, black: 3 },
    resource: 'blue',
    points: 5,
  },

  // White
  {
    id: 79,
    level: 3,
    price: { white: 0, blue: 3, green: 3, red: 3, black: 5 },
    resource: 'white',
    points: 3,
  },
  {
    id: 80,
    level: 3,
    price: { white: 0, blue: 0, green: 0, red: 0, black: 7 },
    resource: 'white',
    points: 4,
  },
  {
    id: 81,
    level: 3,
    price: { white: 3, blue: 6, green: 0, red: 0, black: 3 },
    resource: 'white',
    points: 4,
  },
  {
    id: 82,
    level: 3,
    price: { white: 0, blue: 7, green: 0, red: 0, black: 3 },
    resource: 'white',
    points: 5,
  },

  // Green
  {
    id: 83,
    level: 3,
    price: { white: 5, blue: 3, green: 0, red: 3, black: 3 },
    resource: 'green',
    points: 3,
  },
  {
    id: 84,
    level: 3,
    price: { white: 0, blue: 7, green: 0, red: 0, black: 0 },
    resource: 'green',
    points: 4,
  },
  {
    id: 85,
    level: 3,
    price: { white: 3, blue: 3, green: 6, red: 0, black: 0 },
    resource: 'green',
    points: 4,
  },
  {
    id: 86,
    level: 3,
    price: { white: 0, blue: 0, green: 7, red: 3, black: 0 },
    resource: 'green',
    points: 5,
  },

  // Red
  {
    id: 87,
    level: 3,
    price: { white: 3, blue: 3, green: 3, red: 0, black: 5 },
    resource: 'red',
    points: 3,
  },
  {
    id: 88,
    level: 3,
    price: { white: 0, blue: 0, green: 7, red: 0, black: 0 },
    resource: 'red',
    points: 4,
  },
  {
    id: 89,
    level: 3,
    price: { white: 3, blue: 0, green: 3, red: 6, black: 0 },
    resource: 'red',
    points: 4,
  },
  {
    id: 90,
    level: 3,
    price: { white: 0, blue: 3, green: 7, red: 0, black: 0 },
    resource: 'red',
    points: 5,
  },
];

export default cards;
