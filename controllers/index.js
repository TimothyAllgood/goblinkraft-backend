module.exports = {
  category: require("./category.controller"),
  campaign: require("./campaign.controller"),
  // Generators
  character: require("./generators/character.controller"),
  item: require("./generators/item.controller"),
  monster: require("./generators/monster.controller"),
  npc: require("./generators/npc.controller"),
  plotHook: require("./generators/plotHook.controller"),
  tavern: require("./generators/tavern.controller"),
  town: require("./generators/town.controller"),
  combat: require("./generators/combat.controller"),
  // User
  profile: require("./profile.controller"),
  user: require("./user.controller"),
  // Admin Controllers
  admin: require("./admin/admin.controller"),
  // Character
  backstory: require("./admin/generatorData/character/backstory.controller"),
  characterClass: require("./admin/generatorData/character/characterClass.controller"),
  subclass: require("./admin/generatorData/character/subclass.controller"),
  spell: require("./admin/generatorData/character/spell.controller"),
  race: require("./admin/generatorData/character/race.controller"),
  author: require("./admin/generatorData/character/author.controller"),
  characterTrait: require("./admin/generatorData/character/characterTrait.controller"),
  classTrait: require("./admin/generatorData/character/classTrait.controller"),
  culture: require("./admin/generatorData/character/culture.controller"),
  locale: require("./admin/generatorData/character/locale.controller"),
  tone: require("./admin/generatorData/character/tone.controller"),
  origin: require("./admin/generatorData/character/origin.controller"),
  // NPC
  quirk: require("./admin/generatorData/quirk.controller"),
  activity: require("./admin/generatorData/activity.controller"),
  // Items
  itemEffect: require("./admin/generatorData/item/itemEffect.controller"),
  itemCurse: require("./admin/generatorData/item/itemCurse.controller"),
  // Plot Hooks
  plotHookData: require("./admin/generatorData/plotHookData/plotHookData.controller"),
  // Tavern
  menuItem: require("./admin/generatorData/tavern/menuItem.controller"),
  tavernAtmosphere: require("./admin/generatorData/tavern/tavernAtmosphere.controller"),
  tavernEvent: require("./admin/generatorData/tavern/tavernEvent.controller"),
  tavernFeature: require("./admin/generatorData/tavern/tavernFeature.controller"),
  tavernRumor: require("./admin/generatorData/tavern/tavernRumor.controller"),
  // Monster
  monsterData: require("./admin/generatorData/monster/monsterData.controller"),
  monsterAbility: require("./admin/generatorData/monster/monsterAbility.controller"),
};
