module.exports = {
  campaign: require("./campaign.route"),
  category: require("./category.route"),
  item: require("./generators/item.route"),
  npc: require("./generators/npc.route"),
  profile: require("./profile.route"),
  user: require("./user.route"),
  admin: require("./admin/admin.route"),
};
