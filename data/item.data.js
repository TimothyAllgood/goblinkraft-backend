const itemType = [
  "armor",
  "potion",
  // "poison",
  "ring",
  "rod",
  "staff",
  "shield",
  "meleeWeapon",
  "rangedWeapon",
  // "cloak",
  // "boots",
  // "gloves",
  // "jewelery",
  // "figurine",
  // "instrument",
  // "belt",
];
const rarity = ["Common", "Uncommon", "Rare", "Very Rare", "Legendary"];
const attunement = [true, false];
const cursed = ["Minor", "Major"];

const categories = {
  defensive: ["armor", "ring", "shield"],
  offensive: ["meleeWeapon", "rangedWeapon", "staff", "rod"],
};

module.exports = {
  itemType,
  rarity,
  attunement,
  cursed,
  categories,
  meleeWeapon: require("./items/meleeWeapon.data"),
  rangedWeapon: require("./items/rangedWeapon.data"),
  potion: require("./items/potion.data"),
  rod: require("./items/rod.data"),
  staff: require("./items/staff.data"),
  ring: require("./items/ring.data"),
  wondrous: require("./items/wondrous.data"),
  armor: require("./items/armor.data"),
  shield: require("./items/shield.data"),
};
