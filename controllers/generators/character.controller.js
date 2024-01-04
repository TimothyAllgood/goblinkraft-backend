const { character: characterService } = require("../../services");

const generateCharacter = async (req, res) => {
  const character = await characterService.generateCharacter();
  res.json(character);
};

module.exports = {
  generateCharacter,
};
