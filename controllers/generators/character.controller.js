const { character: characterService } = require("../../services");
const { report } = require("../../managers");

const generateCharacter = async (req, res) => {
  const character = await characterService.generateCharacter();
  await report.create("Character Generator");
  res.json(character);
};

module.exports = {
  generateCharacter,
};
