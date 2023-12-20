const { v4: uuidv4 } = require("uuid");
const {
  getRandomElement,
  getTrueFalse,
  getRandomDbElement,
} = require("../util/random.util");
const itemData = require("../data/item.data");

const generateItem = async (affixAmount = 1, cursedChance = 0.1) => {
  const seed = uuidv4();
  const itemType = getRandomElement(seed + "itemType", itemData.itemType);
  const type = getRandomElement(seed + "type", itemData[itemType]);
  let effects = [];
  for (let i = 0; i < affixAmount; i++) {
    const effect = await getRandomDbElement(seed + i, "itemEffect", {
      field: "itemType",
      value: itemType,
    });
    effects.push(effect);
  }

  const cursed = getTrueFalse(seed + "cursed", cursedChance);
  const curse = cursed
    ? await getRandomDbElement(seed, "itemCurse")
    : undefined;

  return { type, effects, curse };
};

module.exports = {
  generateItem,
};
