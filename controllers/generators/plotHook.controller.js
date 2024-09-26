const { report } = require("../../managers");
const { plotHook: plotHookService } = require("../../services");
const OpenAIApi = require("openai");

const openai = new OpenAIApi({ key: process.env.OPENAI_API_KEY });

const generatePlotHook = async (req, res) => {
  const { type } = req.body;
  const plotHook = await plotHookService.generatePlotHook(type);
  await report.create("Plot Hook Generator");
  res.json(plotHook);
};

const generateAIAdventure = async (req, res) => {
  console.log(req.body);
  const newPrompt = `Generate a fun, engaging Dungeons and Dragons adventure based on the following plot hook. Ensure the output includes an HTML body with newlines and headings, an adventure start section, at least three acts, a conclusion, and a rewards section. Exclude any style tags the html tags, and any head tags and the meta between and the opening and closing body tags.
  ${req.body}`;
  const gptModel = "gpt-3.5-turbo-16k";

  let chatCompletion = await openai.chat.completions.create({
    model: gptModel,
    messages: [
      { role: "system", content: "You are a renowned Dungeons and Dragons DM" },
      { role: "user", content: newPrompt },
    ],
  });

  if (chatCompletion.choices[0].message.content.startsWith("Sorry")) {
    chatCompletion = await openai.chat.completions.create({
      model: gptModel,
      messages: [
        {
          role: "system",
          content: "You are a renowned Dungeons and Dragons DM",
        },
        { role: "user", content: newPrompt },
      ],
    });
  }

  const adventure = chatCompletion.choices[0].message.content;

  res.json({ adventure });
};

const generatePlotHooks = async (req, res) => {
  const { type } = req.body;
  let amount = 3;
  let plotHooks = [];
  for (let i = 0; i < amount; i++) {
    const plotHook = await plotHookService.generatePlotHook(type);
    plotHooks.push(plotHook);
  }
  await report.create("Plot Hook Generator");
  res.json({ plotHooks });
};

module.exports = {
  generatePlotHook,
  generateAIAdventure,
  generatePlotHooks,
};
