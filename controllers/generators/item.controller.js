const { item: itemService } = require("../../services");

const generateItem = async (req, res) => {
  const item = await itemService.generateItem();
  res.json({
    item,
  });
};

const generateItems = async (req, res) => {
  let amount = 6;
  let items = [];
  for (let i = 0; i < amount; i++) {
    const npc = await itemService.generateItem();
    items.push(npc);
  }
  res.json({
    items,
  });
};

module.exports = {
  generateItem,
  generateItems,
};
