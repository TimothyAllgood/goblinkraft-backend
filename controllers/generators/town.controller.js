const { town: townService } = require("../../services");

const generateTown = async (req, res) => {
  const town = await townService.generateTown();
  res.json(town);
};

module.exports = {
  generateTown,
};
