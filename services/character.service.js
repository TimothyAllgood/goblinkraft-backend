const { v4: uuidv4 } = require("uuid");
const {
  getRandomDbElement,
  getRandomDiceRole,
  getRandomElement,
  getRandomFilteredBackstory,
  getRandomCharacterTraits,
  getRandomClassTraits,
} = require("../util/random.util");
const adjectives = require("../data/character/adjectives");

const generateCharacter = async () => {
  const seed = uuidv4();
  const race = await getRandomDbElement(seed, "race");
  const characterClass = await getRandomDbElement(seed, "characterClass");
  const adjective = await getRandomElement(seed + "adjective", adjectives);
  const culture = await getRandomDbElement(seed, "culture");
  const locale = await getRandomDbElement(seed, "locale");
  const origin = await getRandomDbElement(seed, "origin");
  const tone = await getRandomDbElement(seed, "tone");
  const traits = await getRandomCharacterTraits(seed);
  const classTraits = await getRandomClassTraits(seed, characterClass.id);
  const backstory = await getRandomFilteredBackstory(
    seed,
    "backstory",
    characterClass.id,
    race.id
  );

  let replacedRace = backstory.concept.replace("{race}", race.name);
  let replacedClass = replacedRace.replace("{class}", characterClass.name);
  let replacedSubclass = replacedClass.replace(" {subclass}", "");
  let replacedAdjective = replacedSubclass.replace(
    "{adjective}",
    adjective.toLowerCase()
  );

  if (["a", "e", "i", "o", "u"].indexOf(adjective[0].toLowerCase()) !== -1) {
    replacedAdjective = replacedAdjective.replace("A", "an");
  } else {
    replacedAdjective = replacedAdjective.replace("A", "a");
  }

  backstory.concept = replacedAdjective + ".";

  return {
    race,
    characterClass,
    adjective,
    backstory,
    culture,
    locale,
    origin,
    tone,
    traits,
    classTraits,
  };
};

module.exports = {
  generateCharacter,
};
