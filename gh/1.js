const Fruits = {
  apple: {
    color: "red",
    taste: "sour"
  },
  pear: {
    color: "yello",
    taste: "sweet"
  },
  citrus: {
    color: "orange",
    taste: "sour"
  },
  persimmon: {
    color: "brown",
    taste: "sweet"
  },
  grape: {
    color: "purple",
    taste: "sweet"
  }
};

const storeA = {
  fruits: {
    apple: {
      nature: Fruits.apple,
      stock: 10,
      price: 1000
    }
  },
  location: [100, 10],
  name: "a_store",
  size: 10
};

const storeB = {
  fruits: {
    pear: {
      nature: Fruits.apple,
      stock: 10,
      price: 1000
    },
    grape: {
      nature: Fruits.grape,
      stock: 20,
      price: 500
    },
    persimmon: {
      nature: Fruits.persimmon,
      stock: 15,
      price: 2000
    }
  },
  location: [1, 2],
  name: "b_store",
  size: 40
};

const storeC = {
  fruits: {
    pear: {
      nature: Fruits.apple,
      stock: 10,
      price: 10000
    },
    citrus: {
      nature: Fruits.citrus,
      stock: 20,
      price: 20000
    },
    persimmon: {
      nature: Fruits.persimmon,
      stock: 15,
      price: 30000
    }
  },
  location: [50, 30],
  name: "c_store",
  size: 105
};

// 1번 과제

const first_result = Object.entries(Fruits)
  .filter(fruit => fruit[1].taste === "sour")
  .map(fruit => fruit[0]);

// 2번 과제
const getAvgPrice = store => {
  const prices = Object.values(store.fruits).map(fruit => fruit.price);
  return prices.reduce((a, b) => a + b) / prices.length;
};

console.log("store B::", getAvgPrice(storeB));
console.log("store C ::", getAvgPrice(storeC));

// 3번 과제

const stores = [storeA, storeB, storeC];

const getDistance = (p1, p2) => {
  return Math.pow(
    Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2),
    1 / 2
  );
};

let getNearStore = (location, stores) => {
  return stores.reduce((acc, store) => {
    const distance = getDistance(location, store.location);
    if (!acc.distance || acc.distance > distance) {
      acc.distance = distance;
      acc.store = store;
    }
    return acc;
  }, {});
};

// getNearStore = location => {
//   return stores
//     .map(store => {
//       return {
//         name: store.name,
//         distance: getDistance(store.location, location)
//       };
//     })
//     .sort((a, b) => a.distance > b.distance)[0];
// };

console.log(getNearStore([40, 20]));
