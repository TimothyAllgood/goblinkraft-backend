const { v4: uuidv4 } = require("uuid");
const {
  getRandomDbElement,
  getRandomDiceRole,
  getRandomFilteredMonster,
} = require("../util/random.util");

const generateMonster = async (filters = {}, randomizeAffixes = false) => {
  const seed = uuidv4();
  if (!filters?.source || filters?.sources?.length === 0) {
    filters.source = ["Monster Manual", "Player's Handbook"];
  }

  const filterClause = { source: [], type: [], environment: [] };

  if (filters?.source?.length > 0) {
    filters?.source?.forEach((source) => {
      filterClause?.source?.push({ ["source"]: source });
    });
  }
  if (filters?.type?.length > 0) {
    filters?.type?.forEach((type) => {
      filterClause?.type?.push({ ["type"]: type });
    });
  }
  if (filters?.environment?.length > 0) {
    filters?.environment?.forEach((environment) => {
      filterClause?.environment?.push({
        ["environment"]: { contains: environment, mode: "insensitive" },
      });
    });
  }

  const rollDice = getRandomDiceRole(seed + "monster-dice");
  let weight = "common";
  if (rollDice >= 0 && rollDice <= 2) {
    weight = "veryrare";
  }

  if (rollDice >= 3 && rollDice <= 9) {
    weight = "rare";
  }

  if (rollDice >= 10 && rollDice <= 33) {
    weight = "common";
  }

  let abilityClause;
  if (weight) {
    abilityClause = {
      field: "weight",
      value: weight,
    };
  }

  const monster = await getRandomFilteredMonster(seed, "monster", filterClause);
  const abilities = [];

  let affixAmount = 1;

  if (randomizeAffixes) {
    affixAmount = await getRandomDiceRole(seed, 3);
  }

  for (let i = 0; i < affixAmount; i++) {
    const ability = await getRandomDbElement(
      seed + "monster-ability" + monster + i * 69,
      "monsterAbility",
      abilityClause
    );
    abilities.push(ability);
  }

  return { monster, abilities };
};

const parseMonster = (monster) => {
  // Convert CR to Decimal
  const split = monster.cr.toString().split("/");
  let result = parseInt(monster.cr, 10);
  if (split[1]) {
    result = split[0] / split[1];
  }
  monster.cr = result;

  // Convert Source
  const sources = monster.source.split(",");
  const link = sources[0].match(/\bhttps?:\/\/\S+/gi);
  let source;
  if (!link) {
    source = sources[0].split(/(\d+)/);
    monster.sourcePage = source[1];
  }
  if (link) {
    source = sources[0].split(/\bhttps?:\/\/\S+/gi);
    monster.link = link[0];
  }

  sources.some((s) => {
    if (s.includes("Monster Manual")) {
      source = s.split(/(\d+)/);
      monster.sourcePage = source[1];
    }
  });

  monster.source = source[0].trim().slice(0, -1);

  //Cleanup type
  monster.type = monster.type.replace(/ *\([^)]*\) */g, "");
  return monster;
};

const updateMonsterSource = (monster) => {
  let split = monster.source.split(":");
  console.log(split);
  let source = split[0].trim();
  let page = split[1].trim();
  monster.source = source;
  monster.sourcePage = page;

  const splitCR = monster.cr.toString().split("/");
  let result = parseInt(monster.cr, 10);
  if (splitCR[1]) {
    result = splitCR[0] / splitCR[1];
  }
  monster.cr = result;

  return monster;
};

module.exports = {
  generateMonster,
  parseMonster,
  updateMonsterSource,
};
