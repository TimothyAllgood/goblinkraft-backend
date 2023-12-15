const itemType = [
  "armor",
  "potion",
  "ring",
  "rod",
  "staff",
  "shield",
  "meleeWeapon",
  "rangedWeapon",
  "wondrous",
];
const rarity = ["Common", "Uncommon", "Rare", "Very Rare", "Legendary"];
const attunement = [true, false];
const cursed = ["Minor", "Major"];

const shield = {
  effect: [{}],
  curse: [{}],
};

const potion = {
  effect: [{}],
};

const ring = {
  effect: [{}],
  curse: [{}],
};

const rod = {
  effect: [{}],
  curse: [{}],
};

const staff = {
  effect: [{}],
  curse: [{}],
};

const meleeWeapon = {
  type: [
    "Club",
    "Dagger",
    "Greatclub",
    "Handaxe",
    "Light Hammer",
    "Mace",
    "Quarterstaff",
    "Sickle",
    "Spear",
    "Battleaxe",
    "Flail",
    "Glaive",
    "Greataxe",
    "Greatsword",
    "Halberd",
    "Longsword",
    "Maul",
    "Morningstar",
    "Pike",
    "Rapier",
    "Scimitar",
    "Shortsword",
    "Trident",
    "War Pick",
    "Warhammer",
    "Whip",
  ],
  effect: [{}],
  curse: [{}],
};

const rangedWeapon = {
  type: [
    "Javelin",
    "Light Crossbow",
    "Dart",
    "Shortbow",
    "Sling",
    "Blowgun",
    "Hand Crossbow",
    "Heavy Crossbow",
    "Longbow",
  ],
  effect: [{}],
  curse: [{}],
};

const wondrous = {
  effect: [{}],
  curse: [{}],
};

module.exports = {
  itemType,
  rarity,
  attunement,
  cursed,
  armor: require("./items/armor.data"),
};
