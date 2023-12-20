const armorEffects = [
  {
    name: "of Flames",
    description: "Grants resistance to fire damage.",
    rarity: "Uncommon",
    type: "suffix",
  },
  {
    name: "Nimble",
    description: "Provides advantage on Dexterity saving throws.",
    rarity: "Rare",
    type: "prefix",
  },
  {
    name: "of Mage's Ward",
    description: "Allows the wearer to cast Mage Armor once per day.",
    rarity: "Rare",
    type: "suffix",
  },
  {
    name: "Guardian's",
    description: "Absorbs the next critical hit against the wearer.",
    rarity: "Very Rare",
    type: "prefix",
  },
  {
    name: "Ethereal",
    description: "Can transform into a different type of armor once per day.",
    rarity: "Legendary",
    type: "suffix",
  }, // Common

  {
    name: "Sturdy",
    description: "Provides a +1 bonus to AC.",
    rarity: "Common",
    type: "prefix",
  },
  {
    name: "Lightweight",
    description: "Reduces armor weight by 25%.",
    rarity: "Common",
    type: "prefix",
  },
  {
    name: "Well-Fitted",
    description: "Grants advantage on Dexterity (Stealth) checks.",
    rarity: "Common",
    type: "prefix",
  },
  {
    name: "Adaptable",
    description: "Can change appearance to mimic other armor.",
    rarity: "Common",
    type: "suffix",
  },

  // Uncommon
  {
    name: "Resilient",
    description: "Provides resistance to bludgeoning damage.",
    rarity: "Uncommon",
    type: "prefix",
  },
  {
    name: "of Quick Reflexes",
    description: "Grants advantage on Dexterity saving throws.",
    rarity: "Uncommon",
    type: "suffix",
  },
  {
    name: "of Echoing Steps",
    description:
      "Creates illusory sounds, granting advantage on Dexterity (Stealth) checks.",
    rarity: "Uncommon",
    type: "suffix",
  },
  {
    name: "Arcane Absorption",
    description: "Absorbs the next spell targeting the wearer once per day.",
    rarity: "Uncommon",
    type: "prefix",
  },
  {
    name: "of the Guardian's Embrace",
    description: "Reduces damage from critical hits by half.",
    rarity: "Uncommon",
    type: "suffix",
  },

  // Rare
  {
    name: "of the Spectral Aura",
    description:
      "Creates a ghostly aura, imposing disadvantage on attacks against the wearer.",
    rarity: "Very Rare",
    type: "suffix",
  },
  {
    name: "of the Ancients",
    description:
      "Once per day, grants temporary hit points equal to the wearer's level.",
    rarity: "Rare",
    type: "suffix",
  },
  {
    name: "of Blinding Light",
    description:
      "Once per day, can emit a blinding light, forcing enemies to make a Constitution saving throw.",
    rarity: "Rare",
    type: "suffix",
  },
  {
    name: "of Blinking Defense",
    description: "Allows the wearer to cast Blink once per day.",
    rarity: "Rare",
    type: "suffix",
  },
  {
    name: "of Elemental Warding",
    description:
      "Grants resistance to a chosen elemental damage type. Can be changed after a long rest.",
    rarity: "Rare",
    type: "suffix",
  },

  // Very Rare
  {
    name: "Timeless",
    description: "Immunizes the wearer against the effects of aging.",
    rarity: "Very Rare",
    type: "prefix",
  },
  {
    name: "of Celestial Harmony",
    description:
      "Once per day, grants the ability to cast Greater Restoration on the wearer.",
    rarity: "Very Rare",
    type: "suffix",
  },
  {
    name: "Arcane Barrier",
    description: "Provides immunity to magic missile spells.",
    rarity: "Very Rare",
    type: "prefix",
  },
  {
    name: "of Dimensional Resilience",
    description: "Grants resistance to force damage.",
    rarity: "Very Rare",
    type: "suffix",
  },
  {
    name: "of Soulbound Protection",
    description:
      "Can absorb and store the soul of a defeated enemy, gaining temporary hit points.",
    rarity: "Very Rare",
    type: "suffix",
  },

  // Legendary
  {
    name: "Eternal Guardian's",
    description: "Grants advantage on all saving throws.",
    rarity: "Legendary",
    type: "prefix",
  },
  {
    name: "of Dreadnought's Resolve",
    description: "Immunity to fear and charm effects.",
    rarity: "Legendary",
    type: "suffix",
  },
  {
    name: "of Pandemonium Ward",
    description: "Once per day, can activate an antimagic field.",
    rarity: "Legendary",
    type: "suffix",
  },
  {
    name: "of Infernal Wrath",
    description:
      "Unleashes flames upon attackers, dealing fire damage in retaliation.",
    rarity: "Legendary",
    type: "suffix",
  },
  {
    name: "of the Celestial Beacon",
    description:
      "Shines as a beacon of hope, granting allies advantage on saving throws.",
    rarity: "Legendary",
    type: "suffix",
  },
];

const armorCurses = [
  {
    name: "Frostbitten",
    description: "Vulnerability to cold damage.",
    rarity: "Minor",
  },
  {
    name: "Sluggish",
    description: "Reduces movement speed by 10 feet.",
    rarity: "Minor",
  },
  {
    name: "Glowing Mirth",
    description: "Emits a faint, eerie glow at all times.",
    rarity: "Major",
  },
  {
    name: "Jester's Curse",
    description: "Causes uncontrollable laughter in serious situations.",
    rarity: "Major",
  },
  {
    name: "Beast Magnet",
    description: "Attracts hostile creatures within a 30-foot radius.",
    rarity: "Major",
  },
  // Minor Curses
  {
    name: "Restless Spirits",
    description:
      "Whispers and moans emanate from the armor, imposing disadvantage on Charisma (Stealth) checks.",
    rarity: "Minor",
  },
  {
    name: "Faint Glow",
    description: "Emits a faint, eerie glow even when attempting to hide.",
    rarity: "Minor",
  },
  {
    name: "Weight of Guilt",
    description: "Increases armor weight, reducing movement speed by 10 feet.",
    rarity: "Minor",
  },
  {
    name: "Cursed Reflection",
    description:
      "Reflects a twisted and cursed appearance in any reflective surface.",
    rarity: "Minor",
  },
  {
    name: "Clumsy Guardian",
    description:
      "Impairs Dexterity, imposing disadvantage on Dexterity saving throws.",
    rarity: "Minor",
  },

  // Major Curses
  {
    name: "Banshee's Wail",
    description:
      "Screams loudly upon taking damage, attracting nearby enemies.",
    rarity: "Major",
  },
  {
    name: "Doomed Destiny",
    description:
      "Portends a tragic fate, imposing disadvantage on all saving throws.",
    rarity: "Major",
  },
  {
    name: "Cursed Link",
    description:
      "Forms a psychic link with a random creature, sharing emotions and pain.",
    rarity: "Major",
  },
  {
    name: "Haunting Presence",
    description:
      "Emanates a ghostly aura, frightening creatures within a 30-foot radius.",
    rarity: "Major",
  },
  {
    name: "Soul Devourer",
    description:
      "Hungers for the souls of the fallen, requiring the wearer to make a Wisdom saving throw to avoid devouring a defeated enemy's soul.",
    rarity: "Major",
  },
];

const armor = [
  "Padded Armor",
  "Leather Armor",
  "Studded Leather Armor",
  "Hide Armor",
  "Chain Shirt",
  "Scale Mail",
  "Breastplate",
  "Half Plate",
  "Ring Mail",
  "Chain Mail",
  "Splint Armor",
  "Plate Armor",
];

module.exports = armor;
