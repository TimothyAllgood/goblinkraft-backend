module.exports = {
  category: require("./category.controller"),
  campaign: require("./campaign.controller"),
  item: require("./generators/item.controller"),
  npc: require("./generators/npc.controller"),
  profile: require("./profile.controller"),
  user: require("./user.controller"),
  // Admin Controllers
  admin: require("./admin/admin.controller"),
};
