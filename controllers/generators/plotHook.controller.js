const { plotHook: plotHookService } = require("../../services");

const generatePlotHook = async (req, res) => {
  const { type } = req.body;
  const plotHook = await plotHookService.generatePlotHook(type);
  res.json(plotHook);
};

const generatePlotHooks = async (req, res) => {
  const { type } = req.body;
  let amount = 6;
  let plotHooks = [];
  for (let i = 0; i < amount; i++) {
    const plotHook = await plotHookService.generatePlotHook(type);
    plotHooks.push(plotHook);
  }
  res.json({ plotHooks });
};

module.exports = {
  generatePlotHook,
  generatePlotHooks,
};
