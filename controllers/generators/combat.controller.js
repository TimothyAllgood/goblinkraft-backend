const OpenAIApi = require("openai");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const openai = new OpenAIApi({ key: process.env.OPENAI_API_KEY });

const generateCombatDescription = async (req, res) => {
  const newPrompt = req.body.prompt;
  const gptModel = "gpt-4o";
  // req.body.subscribed && req.body.subscription === "premium"
  //   ? "gpt-4"
  //   : "gpt-3.5-turbo-16k";

  let chatCompletion = await openai.chat.completions.create({
    model: gptModel,
    messages: [
      {
        role: "system",
        content:
          'You are a player at a dungeons and dragons table, playing with your friends. The DM just asked "How do you want to do this?" and you responded with: ' +
          newPrompt,
      },
      {
        role: "user",
        content:
          'You are a player at a dungeons and dragons table, playing with your friends. The DM just asked "How do you want to do this?" and you responded with: ' +
          newPrompt,
      },
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

  const description = chatCompletion.choices[0].message.content;

  await prisma.description.create({
    data: {
      description: description,
    },
  });

  res.json({ description });
};

module.exports = { generateCombatDescription };
