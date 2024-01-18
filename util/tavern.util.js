const { getRandomElement } = require("./random.util");

const templates = [
  { template: "The ${color} ${noun}", parts: ["colors", "nouns"] },
  { template: "${noun} of the ${noun}", parts: ["nouns", "nouns"] },
  { template: "The ${adjective} ${noun}", parts: ["adjectives", "nouns"] },
  { template: "${noun} and ${noun}", parts: ["nouns", "nouns"] },
  { template: "${animal} and ${noun}", parts: ["animals", "nouns"] },
  { template: "${noun}'s ${feature}", parts: ["nouns", "features"] },
  { template: "The ${verb} ${noun}", parts: ["verbs", "nouns"] },
  { template: "The ${color} ${animal}", parts: ["colors", "animals"] },
  { template: "The ${verb} ${animal}", parts: ["verbs", "animals"] },
  { template: "The ${adjective} ${animal}", parts: ["adjectives", "animals"] },
  { template: "The ${verb} ${feature}", parts: ["verbs", "animals"] },
];

const nouns = [
  "Dragon",
  "Knight",
  "Crown",
  "Chalice",
  "Phoenix",
  "Cloaca",
  "Goblin",
  "Wizard",
  "Forest",
  "Harbor",
  "Castle",
  "Raven",
  "Dagger",
  "Griffin",
  "Ship",
  "Tower",
  "Flame",
  "Hammer",
  "Wolf",
  "Eagle",
  "Falcon",
  "Bear",
  "Lion",
  "Sword",
  "Gem",
  "Star",
  "Moon",
  "Sun",
  "Throne",
  "Anchor",
  "Serpent",
  "Owl",
  "Scroll",
  "Tome",
  "Giant",
  "Pirate",
  "Elf",
  "Dwarf",
  "Mage",
  "Specter",
  "Meadow",
  "Willow",
  "Oak",
  "Obelisk",
  "Cauldron",
  "Gargoyle",
  "Cloak",
  "Torch",
  "Amulet",
  "Alchemist",
  "Citadel",
  "Minotaur",
  "Harp",
  "Mermaid",
  "Cyclops",
  "Anchorite",
  "Basilisk",
  "Chimera",
  "Golem",
  "Hydra",
  "Labyrinth",
  "Manticore",
  "Zephyr",
  "Quiver",
  "Runestone",
  "Scepter",
  "Talisman",
  "Vanguard",
  "Wyvern",
  "Yeti",
  "Ziggurat",
  "Nomad",
  "Valkyrie",
  "Anvil",
  "Broadsword",
  "Cauldron",
  "Dungeon",
  "Enchanter",
  "Amulet",
  "Bracers",
  "Candelabra",
  "Diadem",
  "Ewer",
  "Flask",
  "Glaive",
  "Halberd",
  "Icon",
  "Javelin",
  "Kite Shield",
  "Labyrinth",
  "Monolith",
  "Nautilus",
  "Obelisk",
  "Phylactery",
  "Quill",
  "Reliquary",
  "Sceptre",
  "Tiara",
  "Urn",
  "Vestment",
  "Warhammer",
  "Yurt",
  "Alcove",
  "Brazier",
  "Cuirass",
  "Dais",
  "Fairy",
  "Goblet",
  "Helm",
  "Ivory",
  "Jester",
  "Kettle",
  "Lute",
  "Mystic",
  "Necromancer",
  "Oracle",
  "Paladin",
  "Quiver",
  "Rune",
  "Scroll",
  "Tunic",
  "Urn",
  "Vial",
  "Wand",
  "Xylophone",
  "Yew",
  "Zeppelin",
  "Bard",
  "Chariot",
  "Diadem",
  "Elixir",
];
const adjectives = [
  "Mystic",
  "Ancient",
  "Hidden",
  "Golden",
  "Cursed",
  "Enchanted",
  "Sleepy",
  "Bustling",
  "Lonely",
  "Frosty",
  "Whispering",
  "Singing",
  "Roaring",
  "Dancing",
  "Laughing",
  "Drunken",
  "Haunted",
  "Luminous",
  "Alchemical",
  "Boundless",
  "Celestial",
  "Dauntless",
  "Ethereal",
  "Fey",
  "Grim",
  "Hallowed",
  "Incandescent",
  "Jovial",
  "Kaleidoscopic",
  "Lunar",
  "Mystic",
  "Nether",
  "Opalescent",
  "Primal",
  "Quixotic",
  "Resplendent",
  "Stellar",
  "Tempestuous",
  "Unyielding",
  "Venerable",
  "Wraithlike",
  "Xenial",
  "Youthful",
  "Zealot",
  "Abyssal",
  "Blazing",
  "Crystal",
  "Dusk",
  "Stormy",
  "Rugged",
  "Serene",
  "Fiery",
  "Crimson",
  "Emerald",
  "Silver",
  "Rusty",
  "Weary",
  "Wandering",
  "Wild",
  "Sacred",
  "Eerie",
  "Gloomy",
  "Sunny",
  "Misty",
  "Sapphire",
  "Burning",
  "Frozen",
  "Howling",
  "Peaceful",
  "Thorny",
  "Arcane",
  "Barren",
  "Celestial",
  "Decrepit",
  "Ethereal",
  "Forlorn",
  "Ghastly",
  "Hallowed",
  "Iridescent",
  "Jovial",
  "Knavish",
  "Lustrous",
  "Mystic",
  "Nebulous",
  "Opulent",
  "Pristine",
  "Quaint",
  "Radiant",
  "Sinister",
  "Tranquil",
  "Unearthly",
  "Venerable",
  "Whimsical",
  "Xenial",
  "Yearning",
  "Zealous",
  "Verdant",
  "Umbral",
  "Tenebrous",
  "Sovereign",
  "Arcane",
  "Bewitched",
  "Cryptic",
  "Dreamy",
  "Eldritch",
  "Fabled",
  "Ghostly",
  "Hazy",
  "Immortal",
  "Jinxed",
  "Knightly",
  "Luminous",
  "Mystic",
  "Nocturnal",
  "Ominous",
  "Primal",
  "Quirky",
  "Radiant",
  "Spectral",
  "Twilight",
  "Unseen",
  "Veiled",
  "Whimsical",
  "Yonder",
  "Zenith",
  "Astral",
  "Blighted",
  "Celestial",
  "Divine",
];
const features = [
  "Inn",
  "Tavern",
  "Alehouse",
  "Pub",
  "Lodge",
  "Bar",
  "Brewery",
  "Cantina",
  "Rest",
  "Retreat",
  "Haven",
  "Hideaway",
  "Sanctuary",
  "Hall",
  "House",
  "Grove",
  "Garden",
  "Den",
  "Cellar",
  "Roost",
  "Nest",
  "Refuge",
  "Joint",
  "Spot",
  "Stop",
  "Cove",
  "Corner",
  "Point",
  "Station",
  "Depot",
  "Cabin",
  "Shack",
  "Hearth",
  "Portal",
  "Domain",
  "Fort",
  "Keep",
  "Tower",
  "Castle",
  "Palace",
  "Grotto",
  "Bazaar",
  "Emporium",
  "Forge",
  "Gallery",
  "Hostel",
  "Infirmary",
  "Junction",
  "Kiosk",
  "Library",
  "Monastery",
  "Observatory",
  "Pavilion",
  "Quarters",
  "Repository",
  "Synagogue",
  "Temple",
  "University",
  "Vault",
  "Workshop",
  "Yard",
  "Nook",
  "Hideout",
  "Bower",
  "Chamber",
  "Parlor",
  "Foyer",
  "Bastion",
  "Cloister",
  "Dungeon",
  "Enclave",
  "Fount",
  "Glade",
  "Hearth",
  "Isle",
  "Junction",
  "Loft",
  "Mire",
  "Niche",
  "Observatory",
  "Pinnacle",
  "Quarters",
  "Ridge",
  "Spire",
  "Terrace",
  "Undercroft",
  "Well",
  "Citadel",
  "Demesne",
  "Expanse",
];
const verbs = [
  "Dancing",
  "Singing",
  "Roaring",
  "Whispering",
  "Laughing",
  "Feasting",
  "Brewing",
  "Glowing",
  "Sailing",
  "Wandering",
  "Dreaming",
  "Fighting",
  "Charming",
  "Burning",
  "Frosting",
  "Thundering",
  "Shining",
  "Murmuring",
  "Crafting",
  "Guarding",
  "Hunting",
  "Fishing",
  "Flying",
  "Weaving",
  "Howling",
  "Gazing",
  "Gathering",
  "Looming",
  "Creeping",
  "Exploring",
  "Drifting",
  "Soaring",
  "Seeking",
  "Rising",
  "Fading",
  "Gliding",
  "Resting",
  "Wishing",
  "Calling",
  "Marching",
  "Conjuring",
  "Deciphering",
  "Enchanting",
  "Forging",
  "Gliding",
  "Harvesting",
  "Illuminating",
  "Jousting",
  "Knitting",
  "Levitating",
  "Meditating",
  "Navigating",
  "Oscillating",
  "Pondering",
  "Quenching",
  "Reaping",
  "Summoning",
  "Traversing",
  "Unveiling",
  "Vanquishing",
  "Wielding",
  "Yawning",
  "Zigzagging",
  "Anchoring",
  "Blazing",
  "Commanding",
  "Delving",
  "Echoing",
  "Battling",
  "Conjuring",
  "Delving",
  "Enthralling",
  "Forging",
  "Gliding",
  "Heralding",
  "Invoking",
  "Juggling",
  "Kindling",
  "Levitating",
  "Mystifying",
  "Nurturing",
  "Orbiting",
  "Prancing",
  "Questing",
  "Reveling",
  "Soaring",
  "Thwarting",
  "Unfurling",
  "Vexing",
  "Wandering",
  "Yearning",
  "Zigzagging",
  "Anchoring",
  "Blasting",
  "Carving",
  "Divining",
  "Ascending",
  "Blazing",
  "Cleaving",
  "Defying",
  "Enchanting",
  "Flourishing",
  "Grasping",
  "Hovering",
  "Igniting",
  "Journeying",
  "Kindling",
  "Lurking",
  "Mending",
  "Navigating",
  "Obscuring",
  "Persevering",
  "Quelling",
  "Reckoning",
  "Sundering",
  "Thriving",
  "Unraveling",
  "Vanquishing",
  "Whispering",
  "Yielding",
  "Zealously",
  "Anchoring",
  "Binding",
  "Clashing",
  "Diverting",
];
const colors = [
  "Crimson",
  "Emerald",
  "Sapphire",
  "Golden",
  "Silver",
  "Ruby",
  "Amber",
  "Azure",
  "Scarlet",
  "Indigo",
  "Violet",
  "Bronze",
  "Ivory",
  "Jade",
  "Midnight",
  "Ebony",
  "Snowy",
  "Rusty",
  "Auburn",
  "Turquoise",
  "Lavender",
  "Peach",
  "Cobalt",
  "Cerulean",
  "Fuchsia",
  "Maroon",
  "Olive",
  "Teal",
  "Copper",
  "Magenta",
  "Tangerine",
  "Charcoal",
  "Aquamarine",
  "Coral",
  "Mint",
  "Rose",
  "Taupe",
  "Lime",
  "Mustard",
  "Navy",
  "Periwinkle",
  "Chartreuse",
  "Vermilion",
  "Gunmetal",
  "Heliotrope",
  "Iridescent",
  "Jasmine",
  "Khaki",
  "Lemon",
  "Mauve",
  "Neon",
  "Onyx",
  "Pearl",
  "Quartz",
  "Raspberry",
  "Shamrock",
  "Topaz",
  "Ultramarine",
  "Vanilla",
  "Wine",
  "Xanadu",
  "Yellow",
  "Zinc",
  "Alabaster",
  "Beryl",
  "Citrine",
  "Drab",
  "Electric",
  "Flint",
  "Amethyst",
  "Burgundy",
  "Cerulean",
  "Damson",
  "Ecru",
  "Flaxen",
  "Gilded",
  "Heather",
  "Indigo",
  "Jasper",
  "Kelly",
  "Lilac",
  "Mulberry",
  "Nacre",
  "Ochre",
  "Puce",
  "Quicksilver",
  "Rosewood",
  "Sienna",
  "Topaz",
  "Umber",
  "Verdigris",
  "Wisteria",
  "Xanthic",
  "Yolk",
  "Zaffre",
  "Bistre",
  "Carmine",
  "Dun",
  "Ermine",
];
const animals = [
  "Dragon",
  "Wolf",
  "Bear",
  "Raven",
  "Eagle",
  "Fox",
  "Lion",
  "Owl",
  "Falcon",
  "Serpent",
  "Hawk",
  "Horse",
  "Badger",
  "Boar",
  "Griffin",
  "Deer",
  "Crow",
  "Sparrow",
  "Panther",
  "Unicorn",
  "Pegasus",
  "Dove",
  "Rat",
  "Bat",
  "Swan",
  "Peacock",
  "Otter",
  "Lynx",
  "Elk",
  "Phoenix",
  "Koi",
  "Frog",
  "Toad",
  "Mongoose",
  "Jackal",
  "Hyena",
  "Leopard",
  "Tiger",
  "Goat",
  "Salamander",
  "Chimpanzee",
  "Dingo",
  "Echidna",
  "Flamingo",
  "Gila monster",
  "Hippogriff",
  "Impala",
  "Jackrabbit",
  "Kangaroo",
  "Lemur",
  "Marmot",
  "Numbat",
  "Ocelot",
  "Pangolin",
  "Quokka",
  "Raccoon",
  "Squirrel",
  "Tarsier",
  "Urial",
  "Viper",
  "Wallaby",
  "Xerus",
  "Yak",
  "Zebra",
  "Armadillo",
  "Bonobo",
  "Cheetah",
  "Dugong",
  "Emu",
  "Basilisk",
  "Centaur",
  "Djinni",
  "Efreeti",
  "Faun",
  "Gryphon",
  "Hippogriff",
  "Imp",
  "Jackalope",
  "Kraken",
  "Leviathan",
  "Manticore",
  "Nymph",
  "Ogre",
  "Pegasus",
  "Quetzalcoatl",
  "Roc",
  "Satyr",
  "Treant",
  "Unicorn",
  "Valkyrie",
  "Wyrm",
  "Xorn",
  "Yeti",
  "Zephyr",
  "Aarakocra",
  "Bugbear",
  "Cockatrice",
  "Dryad",
  "Ent",
  "Chimera",
  "Drake",
  "Elemental",
  "Faerie",
  "Gorgon",
  "Harpy",
  "Ifrit",
  "Jabberwock",
  "Kobold",
  "Lich",
  "Mephit",
  "Naga",
  "Owlbear",
  "Pixie",
  "Qilin",
  "Remorhaz",
  "Sphinx",
  "Thri-kreen",
  "Umber Hulk",
  "Vrock",
  "Warg",
  "Xivort",
  "Yeth Hound",
  "Zaratan",
  "Aboleth",
  "Barghest",
  "Couatl",
  "Doppelganger",
  "Ettercap",
];

const parts = {
  nouns,
  adjectives,
  features,
  verbs,
  colors,
  animals,
};

const generateName = (seed) => {
  let template = getRandomElement(seed + "tavernTemplate", templates);
  let partsArray = template.template.split(/\$\{[^}]+\}/);
  let tavernName = partsArray[0];

  template.parts.forEach((part, i) => {
    let randomPart = getRandomElement(seed + part + i, parts[part]);
    tavernName += randomPart + (partsArray[i + 1] || "");
  });

  return tavernName;
};

module.exports = {
  generateName,
};
