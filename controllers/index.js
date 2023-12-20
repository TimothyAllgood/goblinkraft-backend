module.exports = {
  category: require("./category.controller"),
  campaign: require("./campaign.controller"),
  item: require("./generators/item.controller"),
  npc: require("./generators/npc.controller"),
  profile: require("./profile.controller"),
  user: require("./user.controller"),
  // Admin Controllers
  admin: require("./admin/admin.controller"),
  quirk: require("./admin/generatorData/quirk.controller"),
  activity: require("./admin/generatorData/activity.controller"),
  itemEffect: require("./admin/generatorData/item/itemEffect.controller"),
  itemCurse: require("./admin/generatorData/item/itemCurse.controller"),
};
