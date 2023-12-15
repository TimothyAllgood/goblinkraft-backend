const { v4: uuidv4 } = require("uuid");
const getRandomElement = require("../util/random.util");
const {
  itemType,
  rarity,
  attunement,
  cursed,
  armor: armorData,
  rarity: rarityData,
} = require("../data/item.data");

const generateItem = async () => {
  const seed = uuidv4();
  const rarity = getRandomElement(seed + "rarity", rarityData);
  generateArmor();
  console.log(armor);
  return { rarity, armor };
};

const generateArmor = () => {
  const armor = {
    type: getRandomElement(seed + "armor", armorData.type),
    effect: getRandomElement(
      seed + "armor",
      armorData.effect.filter((item) => item.rarity === rarity)
    ),
  };
  return armor;
};

module.exports = {
  generateItem,
};
