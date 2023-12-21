module.exports = {
  campaign: require("./campaign.route"),
  category: require("./category.route"),
  item: require("./generators/item.route"),
  npc: require("./generators/npc.route"),
  plotHook: require("./generators/plotHook.route"),
  profile: require("./profile.route"),
  user: require("./user.route"),
  // Admin
  admin: require("./admin/admin.route"),
  // NPCs
  quirk: require("./admin/generatorData/quirk.route"),
  activity: require("./admin/generatorData/activity.route"),
  // Items
  itemEffect: require("./admin/generatorData/item/itemEffect.route"),
  itemCurse: require("./admin/generatorData/item/itemCurse.route"),
  // Plot Hooks
  plotHookData: require("./admin/generatorData/plotHookData/plotHookData.route"),
  // Tavern
  menuItem: require("./admin/generatorData/tavern/menuItem.route"),
  tavernAtmosphere: require("./admin/generatorData/tavern/tavernAtmosphere.route"),
  tavernEvent: require("./admin/generatorData/tavern/tavernEvent.route"),
  tavernFeature: require("./admin/generatorData/tavern/tavernFeature.route"),
  tavernRumor: require("./admin/generatorData/tavern/tavernRumor.route"),
};
