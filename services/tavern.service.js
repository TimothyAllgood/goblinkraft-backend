const { v4: uuidv4 } = require("uuid");
const {
  getRandomElement,
  getRandomDbElement,
  getTrueFalse,
  getRandomPercent,
} = require("../util/random.util");

const qualities = [
  "squalid",
  "poor",
  "modest",
  "comfortable",
  "prosperous",
  "extravagant",
  "opulent",
];

const generateTavern = async (q) => {
  const seed = uuidv4();
  const quality = q || getRandomElement(seed + "quality", qualities);

  const whereClause = {
    field: "quality",
    value: quality,
  };

  const genericClause = {
    field: "quality",
    value: "any",
  };

  const menuItemsConfig = {
    squalid: {
      food: getRandomElement(seed + "squalidfood", [1, 2]),
      drink: getRandomElement(seed + "squaliddrink", [1, 2]),
      chanceOfExoticFoods: getRandomPercent(seed + "squalidExotic", 1, 15),
    },
    poor: {
      food: getRandomElement(seed + "modestfood", [2, 3]),
      drink: getRandomElement(seed + "modestdrink", [2, 3]),
      chanceOfExoticFoods: getRandomPercent(seed + "poorExotic", 5, 20),
    },
    modest: {
      food: getRandomElement(seed + "mdoestfood", [3, 4]),
      drink: getRandomElement(seed + "mdoestdrink", [3, 4]),
      chanceOfExoticFoods: getRandomPercent(seed + "poorExotic", 15, 45),
    },
    comfortable: {
      food: getRandomElement(seed + "comfortablefood", [4, 5]),
      drink: getRandomElement(seed + "comfortabledrink", [4, 5]),
      chanceOfExoticFoods: getRandomPercent(seed + "comfortableExotic", 35, 50),
    },
    prosperous: {
      food: getRandomElement(seed + "prosperousfood", [5, 6]),
      drink: getRandomElement(seed + "prosperousdrink", [5, 6]),
      chanceOfExoticFoods: getRandomPercent(seed + "prosperousExotic", 45, 75),
    },
    extravagant: {
      food: getRandomElement(seed + "extravagantfood", [6, 7]),
      drink: getRandomElement(seed + "extravagantdrink", [6, 7]),
      chanceOfExoticFoods: getRandomPercent(
        seed + "extravagantExotic",
        75,
        100
      ),
    },
    opulent: {
      food: getRandomElement(seed + "opulentfood", [7, 8]),
      drink: getRandomElement(seed + "opulentdrink", [7, 8]),
      chanceOfExoticFoods: getRandomPercent(seed + "opulentExotic", 100, 100),
    },
  };

  const amountOfMenuItems = {
    food: menuItemsConfig[quality].food,
    drink: menuItemsConfig[quality].drink,
  };

  const menu = {
    food: [],
    drinks: [],
    exoticFoodPercent: getRandomPercent(seed + "exoticFoodPercent", 10, 50),
    exoticDrinkPercent: getRandomPercent(seed + "exoticDrinkPercent", 10, 50),
  };

  const includeExoticFood = getTrueFalse(
    seed + "exoticFood",
    menuItemsConfig[quality].chanceOfExoticFoods
  );

  const numExoticFoodItems = includeExoticFood
    ? Math.round(
        (amountOfMenuItems.food * (menu.exoticFoodPercent * 100)) / 100
      )
    : 0;

  const numExoticDrinkItems = includeExoticFood
    ? Math.round(
        (amountOfMenuItems.drink * (menu.exoticDrinkPercent * 100)) / 100
      )
    : 0;

  for (let i = 0; i < amountOfMenuItems.food; i++) {
    let food;
    const count = menu.food.filter((f) => f.quality === "exotic").length;

    if (count < numExoticFoodItems) {
      // Get an exotic food item
      food = await getRandomDbElement(
        seed + "exoticFood" + i,
        "menuItem",
        {
          field: "quality",
          value: "exotic",
        },
        {},
        [],
        { field: "type", value: "food" }
      );
    } else {
      // Get a regular food item
      food = await getRandomDbElement(
        seed + "food" + i,
        "menuItem",
        {
          field: "quality",
          value: "common",
        },
        {},
        [],
        {
          field: "type",
          value: "food",
        }
      );
    }
    menu.food.push(food);
  }

  for (let i = 0; i < amountOfMenuItems.drink; i++) {
    let drink;
    const count = [...menu.drinks].filter(
      (drink) => drink.quality === "exotic"
    ).length;

    if (count < numExoticDrinkItems) {
      // Get an exotic drink item
      drink = await getRandomDbElement(
        seed + "exoticFood" + i,
        "menuItem",
        {
          field: "quality",
          value: "exotic",
        },
        {},
        [],
        { field: "type", value: "drink" }
      );
    } else {
      // Get a regular drink item
      drink = await getRandomDbElement(
        seed + "drink" + i,
        "menuItem",
        {
          field: "quality",
          value: "common",
        },
        {},
        [],
        {
          field: "type",
          value: "drink",
        }
      );
    }
    menu.drinks.push(drink);
  }

  const tavernAtmosphere = await getRandomDbElement(
    seed,
    "tavernAtmosphere",
    whereClause,
    genericClause
  );
  const tavernEvent = await getRandomDbElement(
    seed,
    "tavernEvent",
    whereClause,
    genericClause
  );
  const tavernFeature = await getRandomDbElement(
    seed,
    "tavernFeature",
    whereClause,
    genericClause
  );
  const tavernRumor = await getRandomDbElement(seed, "tavernRumor");

  return {
    quality,
    menu,
    tavernAtmosphere,
    tavernEvent,
    tavernFeature,
    tavernRumor,
  };
};

module.exports = {
  generateTavern,
};
