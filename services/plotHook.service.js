const { v4: uuidv4 } = require("uuid");
const { getRandomDbElement } = require("../util/random.util");

const generatePlotHook = async (type = "generic") => {
  const seed = uuidv4();

  const whereClause = type
    ? {
        field: "type",
        value: type,
      }
    : null;

  // const genericClause =
  //   type && type !== "generic"
  //     ? {
  //         field: "type",
  //         value: "generic",
  //       }
  //     : null;

  const plotHook = await getRandomDbElement(seed, "plotHook", whereClause);

  return plotHook;
};

module.exports = {
  generatePlotHook,
};
