const { report } = require("../../managers");
const { NPC } = require("../../services");
const OpenAIApi = require("openai");

const openai = new OpenAIApi({ key: process.env.OPENAI_API_KEY });

const generateNpc = async (req, res) => {
  const npc = await NPC.generateNpc();
  res.json({
    npc,
  });
};

const aiGenerateNpcs = async (req, res) => {
  const newPrompt =
    'Generate a json array of 3 random dnd npcs, the example format is this, make sure its array in this format and nothing else:[{ "name": "Doälva", "description": "She has olive skin, with medium ashy grey halo braided hair and a tattoo on her face. She wears a noblewoman\'s sophisticated dress and a quiver of elaborately fletched arrows.", "job": "Soldier // make sure this is an occupation and not a dnd class", "quirk": { "name": "Carries an enormous, impractical sword.", "info": "Wields a sword far too large to be practical."}, "activity": {"name": "Haggling", "info": "They\'re engaged in haggling, negotiating a deal over goods or services." }, "stats": [ { "name": "Strength", "val": 8 }, { "name": "Dexterity", "val": 4 }, { "name": "Constitution", "val": 8 }, {"name": "Intelligence", "val": 13 }, { "name": "Wisdom", "val": 12 }, { "name": "Charisma", "val": 7 } ], "race": "Human", "hook": { "name": "The Silent Cry", "description": "They scream but make no sound, cursed to be unheard, and desperately seek a way to break their silence.","type":"npc"}}]';
  const gptModel = "gpt-3.5-turbo-16k";
  // req.body.subscribed && req.body.subscription === "premium"
  //   ? "gpt-4"
  //   : "gpt-3.5-turbo-16k";

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

  const npcs = JSON.parse(chatCompletion.choices[0].message.content);

  res.json({ npcs });
};

const generateArt = async (req, res) => {
  const newPrompt = `a head and shoulders portrait in the style of the Dungeon's Dragons art of a ${req.body.race} ${req.body.job} ${req.body.description}`;
  const gptModel = "dall-e-3";

  let image = await openai.images.generate({
    model: gptModel,
    prompt: newPrompt,
  });

  if (!image?.data[0]?.url) {
    image = await openai.images.generate({
      model: gptModel,
      prompt: `a head and shoulders portrait in the style of the Dungeon's Dragons art of a ${req.body.race}`,
    });
  }

  res.json({ art: image.data[0].url });
};

const generateNpcs = async (req, res) => {
  let { amount } = req.body;
  let total = amount || 3;
  let npcs = [];
  for (let i = 0; i < total; i++) {
    const npc = await NPC.generateNpc();
    npcs.push(npc);
  }
  await report.create("NPC Generator");
  res.json({
    npcs,
  });
};

module.exports = {
  generateNpc,
  aiGenerateNpcs,
  generateArt,
  generateNpcs,
};
