module.exports = {
  category: require("./category.controller"),
  campaign: require("./campaign.controller"),
  // Generators
  item: require("./generators/item.controller"),
  npc: require("./generators/npc.controller"),
  plotHook: require("./generators/plotHook.controller"),
  tavern: require("./generators/tavern.controller"),
  // User
  profile: require("./profile.controller"),
  user: require("./user.controller"),
  // Admin Controllers
  admin: require("./admin/admin.controller"),
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
  monsterAbility: require("./admin/generatorData/monster/monsterAbility.controller"),
};
