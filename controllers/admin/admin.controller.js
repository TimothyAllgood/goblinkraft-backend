const { capitalizeFirstWord } = require("../../util/string.util");

const parseWithInfo = async (req, res) => {
  let body = req.body.items;

  body = body.map((item) => {
    let parsedItem = item.split(":");
    let newItem = {
      name: capitalizeFirstWord(parsedItem[0].toLowerCase().trim()),
      info: parsedItem[1].trim(),
    };
    return newItem;
  });

  res.json(body);
};

module.exports = {
  parseWithInfo,
};
