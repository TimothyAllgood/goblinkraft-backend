module.exports = {
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
  monsterAbility: require("./admin/generatorData/monster/monsterAbility.manager"),
};
