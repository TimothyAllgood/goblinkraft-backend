module.exports = {
  // Character
  backstory: require("./admin/generatorData/character/backstory.manager"),
  characterClass: require("./admin/generatorData/character/characterClass.manager"),
  subclass: require("./admin/generatorData/character/subclass.manager"),
  spell: require("./admin/generatorData/character/spell.manager"),
  race: require("./admin/generatorData/character/race.manager"),
  author: require("./admin/generatorData/character/author.manager"),
  characterTrait: require("./admin/generatorData/character/characterTrait.manager"),
  classTrait: require("./admin/generatorData/character/classTrait.manager"),
  culture: require("./admin/generatorData/character/culture.manager"),
  locale: require("./admin/generatorData/character/locale.manager"),
  origin: require("./admin/generatorData/character/origin.manager"),
  tone: require("./admin/generatorData/character/tone.manager"),
  // Npcs
  quirk: require("./admin/generatorData/quirk.manager"),
  activity: require("./admin/generatorData/activity.manager"),
  // Items
  itemEffect: require("./admin/generatorData/item/itemEffect.manager"),
  itemCurse: require("./admin/generatorData/item/itemCurse.manager"),
  // Plot Hooks
  plotHookData: require("./admin/generatorData/plotHookData/plotHookData.manager"),
  // Tavern
  menuItem: require("./admin/generatorData/tavern/menuItem.manager"),
  tavernAtmosphere: require("./admin/generatorData/tavern/tavernAtmosphere.manager"),
  tavernEvent: require("./admin/generatorData/tavern/tavernEvent.manager"),
  tavernFeature: require("./admin/generatorData/tavern/tavernFeature.manager"),
  tavernRumor: require("./admin/generatorData/tavern/tavernRumor.manager"),
  // Monster
  monster: require("./admin/generatorData/monster/monster.manager"),
  monsterAbility: require("./admin/generatorData/monster/monsterAbility.manager"),
  // Reports
  report: require("./admin/report.manager"),
};
