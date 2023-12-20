module.exports = {
  campaign: require("./campaign.route"),
  category: require("./category.route"),
  item: require("./generators/item.route"),
  npc: require("./generators/npc.route"),
  profile: require("./profile.route"),
  user: require("./user.route"),
  admin: require("./admin/admin.route"),
  quirk: require("./admin/generatorData/quirk.route"),
  activity: require("./admin/generatorData/activity.route"),
  itemEffect: require("./admin/generatorData/item/itemEffect.route"),
  itemCurse: require("./admin/generatorData/item/itemCurse.route"),
};
