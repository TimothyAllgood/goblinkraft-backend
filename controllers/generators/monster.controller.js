const { monster: monsterService } = require("../../services");
const { parseMonster } = require("../../services/monster.service");
const { parseJson } = require("../../util/parse.util");
const manager = require("../../managers");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const generateMonster = async (req, res) => {
  const { filters } = req.body;
  const monster = await monsterService.generateMonster(filters, true);
  res.json(monster);
};

const generateMonsters = async (req, res) => {
  const { type, environment, source } = req.body;
  let amount = 6;
  let monsters = [];
  for (let i = 0; i < amount; i++) {
    const monster = await monsterService.generateMonster(
      type,
      environment,
      source
    );
    monsters.push(monster);
  }
  res.json({ monsters });
};

const parseMonsterJson = async (req, res) => {
  const data = req.body;

  const monsters = [];
  data.forEach((fullMonster) => {
    const { name, cr, environment, sources, type, alignment } = fullMonster;
    let monster = { name, cr, environment, source: sources, type, alignment };
    const parsed = monsterService.parseMonster(monster);
    monsters.push(parsed);
  });

  try {
    let data = await manager.monster.createMany(monsters);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateMonsterSource = async (req, res) => {
  const data = req.body;
  try {
    const monsters = [];
    data.forEach(async (fullMonster) => {
      const foundMonster = await prisma.monster.findUnique({
        where: { name: fullMonster.name },
      });

      const { name, cr, environment, sources, type, alignment } = fullMonster;
      let monster = { name, cr, environment, source: sources, type, alignment };
      const updated = monsterService.updateMonsterSource(monster);
      let data = await prisma.monster.update({
        where: { id: foundMonster.id },
        data: updated,
      });
      monsters.push(data);
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  generateMonster,
  generateMonsters,
  parseMonsterJson,
  updateMonsterSource,
};
