const { report } = require("../../managers");
const { tavern: tavernService } = require("../../services");

const generateTavern = async (req, res) => {
  const { quality } = req.body;
  const tavern = await tavernService.generateTavern(quality);
  await report.create("Tavern Generator");
  res.json(tavern);
};

module.exports = {
  generateTavern,
};
