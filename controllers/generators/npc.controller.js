const { NPC } = require("../../services");

const generateNpc = async (req, res) => {
  const npc = await NPC.generateNpc();
  res.json({
    npc,
  });
};

const generateNpcs = async (req, res) => {
  let { amount } = req.body;
  let total = amount || 3;
  let npcs = [];
  for (let i = 0; i < total; i++) {
    const npc = await NPC.generateNpc();
    npcs.push(npc);
  }
  res.json({
    npcs,
  });
};

module.exports = {
  generateNpc,
  generateNpcs,
};
