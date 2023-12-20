const { v4: uuidv4 } = require("uuid");
const { getRandomElement, getRandomDbElement } = require("../util/random.util");
const itemData = require("../data/item.data");

const generateItem = async () => {
  const seed = uuidv4();
  const rarity = getRandomElement(seed + "rarity", itemData.rarity);
  const itemType = getRandomElement(seed + "itemType", itemData.itemType);
  const type = getRandomElement(seed + "type", itemData[itemType]);
  const effect = await getRandomDbElement(seed, "itemEffect", {
    field: "itemType",
    value: itemType,
  });
  return { rarity, type, effect };
};

module.exports = {
  generateItem,
};
