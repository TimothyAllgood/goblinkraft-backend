const { v4: uuidv4 } = require("uuid");
const { getRandomElement, getRandomDbElement } = require("../util/random.util");
const getStats = require("../util/stat.util");
const { nameByRace } = require("fantasy-name-generator");
const jobs = require("../data/npcJobs.data");
const { capitalizeFirstWord } = require("../util/string.util");
const appearances = require("../data/npcAppearance.data");
const plotHook = require("../services/plotHook.service");

/*
NPC Generator Structure:

Name:
Generate a random name for the NPC, considering gender variations if applicable.

Occupation:
Assign a specific job or occupation to the NPC from your extensive list.

Quirk or Trait:
Provide a distinctive quirk, habit, or trait that makes the NPC memorable.

Current Activity:
Describe what the NPC is currently doing. This adds context to their presence in the world.

Appearance Detail:
Highlight a notable physical feature or aspect of the NPC's appearance.

Goal or Motivation:
Identify a short-term goal or motivation driving the NPC.

Obstacle or Challenge:
Specify a current obstacle or challenge the NPC is facing.

Relationships:
Introduce a brief note on the NPC's relationships, whether it's family, friends, or rivals.

Rumors or Gossip:
Include a piece of gossip or rumor circulating about the NPC in the community.

Possession or Item:
Identify a significant possession or item carried by the NPC.
*/

/*
TODO: NPC Generator Structure

√ Name:
  Generate a random name for the NPC, considering gender variations if applicable.

√ Occupation:
  Assign a specific job or occupation to the NPC from your extensive list.

- Quirk or Trait:
  Provide a distinctive quirk, habit, or trait that makes the NPC memorable.

- Current Activity:
  Describe what the NPC is currently doing. This adds context to their presence in the world.

√ Appearance Detail:
  Highlight a notable physical feature or aspect of the NPC's appearance.

- Goal or Motivation:
  Identify a short-term goal or motivation driving the NPC.

- Obstacle or Challenge:
  Specify a current obstacle or challenge the NPC is facing.

- Relationships:
  Introduce a brief note on the NPC's relationships, whether it's family, friends, or rivals.

- Rumors or Gossip:
  Include a piece of gossip or rumor circulating about the NPC in the community.

- Possession or Item:
  Identify a significant possession or item carried by the NPC.
*/

const races = [
  "human",
  "elf",
  "dwarf",
  "gnome",
  "tiefling",
  "halfling",
  "half-orc",
  "half-elf",
];

const genders = [
  {
    name: "male",
    pronouns: {
      subject: "he",
      object: "him",
      possessive: "his",
    },
  },
  {
    name: "female",
    pronouns: {
      subject: "she",
      object: "her",
      possessive: "her",
    },
  },
];

const generateNpc = async () => {
  const seed = uuidv4();

  const race = getRandomElement(seed + "race", races);
  const gender = getRandomElement(seed + "gender", genders);

  let job = getRandomElement(seed + "job", jobs);
  if (job.male || job.female) {
    job = job[gender.name];
  }

  const stats = getStats(seed);
  const quirk = await getRandomDbElement(seed, "quirk");
  const activity = await getRandomDbElement(seed, "activity");
  const hook = await plotHook.generatePlotHook("npc");

  const clothing = getRandomElement(
    seed + "clothing",
    appearances[gender.name].clothing
  );

  let facialFeature = getRandomElement(
    seed + "facial-feature",
    appearances[gender.name].facialFeatures
  );

  const accessory = getRandomElement(
    seed + "accessory",
    appearances[gender.name].accessories
  );
  const hair = {
    length: getRandomElement(
      seed + "hair-length",
      appearances[gender.name].hair.l
    ),
    style: getRandomElement(
      seed + "hair-style",
      appearances[gender.name].hair.style
    ),
    color: getRandomElement(
      seed + "hair-color",
      appearances[gender.name].hair.colors[race]
    ),
  };
  const skinColor = getRandomElement(
    seed + "skin-color",
    appearances.skinColors[race]
  );

  let nameRace = race;
  if (race === "half-elf") {
    nameRace = getRandomElement(seed + "half-elf", ["human", "elf"]);
  }
  if (race === "half-orc") {
    nameRace = getRandomElement(seed + "half-orc", ["human", "orc"]);
  }
  if (race === "tiefling") {
    nameRace = getRandomElement(seed + "tiefling", ["human", "halfdemon"]);
  }
  const name = nameByRace(nameRace, {
    gender: gender.name,
    allowMultipleNames: true,
  });

  const hairString =
    hair.length === "bald"
      ? "a bald head"
      : `${hair.length} ${hair.color} ${hair.style} hair`;

  const description = capitalizeFirstWord(
    `${gender.pronouns.subject} has ${skinColor} skin, with ${hairString} and ${facialFeature}. ${gender.pronouns.subject} wears ${clothing} and ${accessory}.`
  );

  // Wilga has dark purple hair and black eyes, and rows of shark-like teeth. She wears fine raiment and jewelry. Wilga is easily distracted by arcana.
  // Face, clothes, skin

  return {
    name,
    description,
    job: capitalizeFirstWord(job),
    quirk,
    activity,
    stats,
    race: capitalizeFirstWord(race),
    hook,
  };
};

module.exports = {
  generateNpc,
};

// const personalities = {
//   generic: [
//     "${subject} greets everyone with infectious joy. Known for telling exaggerated tales of heroic deeds, ${subject} is eager to ensure everyone feels welcomed and leaves ${object} presence with a warm heart.",
//     "${subject} is a perpetual daydreamer, often lost in thought about distant lands and fantastical adventures. The line between reality and imagination is a blurry one for ${object}.",
//     "Known for ${possessive} infectious laughter, ${subject} brings joy to even the gloomiest of days. ${subject} has a talent for finding humor in the ordinary and sharing it with the world.",
//     "${subject} is an eternal optimist, always seeing the silver lining in every situation. Challenges are simply opportunities for ${object} to shine brighter.",
//     "A compassionate soul, ${subject} is quick to lend a helping hand to those in need.${possessive} kindness is a beacon of warmth in a world that can sometimes feel cold.",
//     "${subject} is a perpetual learner, fascinated by the vast expanse of knowledge the world has to offer.${possessive} curiosity knows no bounds, and every day is a new chance to discover something incredible.",
//     "A natural-born storyteller, ${subject} weaves tales that captivate audiences young and old. The art of storytelling is ${possessive} way of connecting with others and bringing imaginations to life.",
//     "${subject} is an avid collector of oddities and curiosities, each item holding a story of its own. The walls of ${possessive} home are a testament to a life filled with intriguing discoveries.",
//     "With an unquenchable wanderlust, ${subject} is always ready for the next adventure. The open road is ${possessive} canvas, and every step forward is a brushstroke on the masterpiece of ${possessive} journey.",
//     "${subject} is a silent observer, taking in the world with a keen eye.${possessive} presence is a calming one, as if ${subject} holds the wisdom of ages in the quiet moments between words.",
//     "A true friend to all, ${subject} values connections and cherishes the bonds formed with others. The strength of ${possessive} friendships is a source of joy and support in every endeavor.",
//     "${subject} is fueled by a burning rage that simmers just beneath the surface. Quick to anger and slow to forgive, ${subject} navigates the world with a chip on ${possessive} shoulder.",
//     "Known for ${possessive} fiery temper, ${subject} lashes out at perceived slights with a sharp tongue and unbridled passion. Those who cross ${object} soon learn the intensity of ${possessive} wrath.",
//     "${subject} is a brooding storm of resentment, harboring grudges that cast a dark shadow over ${possessive} interactions. The air around ${object} crackles with tension, a warning to those who approach.",
//     "A bitter cynic, ${subject} sees the world through a lens of distrust and skepticism.${possessive} sarcasm and biting remarks are ${possessive} weapons of choice in a battle against perceived foolishness.",
//     "${subject} is a relentless critic, unafraid to voice ${possessive} displeasure with the flaws ${subject} perceives in others.${possessive} sharp critiques cut deep, leaving wounds that may never fully heal.",
//     "${subject} erupts in fits of anger that leave chaos in ${possessive} wake.${possessive} emotions are a tempest, and those who stand too close risk being swept away by the storm",
//     "${subject} is a simmering cauldron of resentment, nursing grievances that smolder over time.${possessive} distrustful gaze is a constant reminder that forgiveness is a rare commodity.",
//     "${subject} seeks out battles of words and wits.${possessive} anger is a weapon, and ${possessive} verbal assaults are as sharp as any blade.",
//     "${subject} is a lone wolf, fuming in solitude and resentful of a world that has done ${object} wrong.${possessive} anger is a shield, protecting ${possessive} wounded heart from further harm.",
//     "An embittered soul, ${subject} navigates life with a scowl and a readiness for conflict.${possessive} anger is a cloak, draped over ${possessive} shoulders as a shield against a world that has shown little kindness.",
//     "${subject} carries the weight of past sorrows, a melancholy shadow cast over ${possessive} every step. In the quiet moments,${possessive} eyes reflect the pain that words cannot convey.",
//     "Known for ${possessive} somber demeanor, ${subject} navigates life with a heavy heart.${possessive} smiles, though rare, hold a depth of sadness that only the perceptive can discern.",
//     "${subject} is a lone soul, haunted by memories that linger in the silence.${possessive} gaze is distant, as if searching for solace in a world that has proven elusive.",
//     "${subject} wears grief like a cloak that never truly leaves ${possessive} shoulders. In ${possessive} eyes, there is a sadness that extends beyond the surface.",
//     "${subject} is a vessel of unshed tears, carrying an ocean of sorrow within ${possessive} soul. The weight of ${possessive} emotions is palpable, even in the simplest of gestures.",
//     "${subject} bears the scars of a past that refuses to fade. ${possessive} footsteps echo with the resonance of a heart burdened by the weight of regret.",
//     "${subject} is a delicate soul, fragile in a world that seems too harsh. The echoes of ${possessive} quiet sighs reveal the vulnerability that ${subject} guards so closely.",
//     "With a heart tethered to the past, ${subject} moves through life with a sense of loss that colors every interaction.${possessive} smiles, though genuine, carry the undertones of sorrow.",
//     "${subject} is a poet of pain, expressing ${possessive} inner turmoil through words that resonate with heartache. Each verse is a cathartic release, a bittersweet melody of ${possessive} emotions.",
//     "${subject} carries the burdens of a journey filled with hardships.${possessive} eyes hold tales of resilience, etched in the lines that speak of a life touched by sorrow.",
//   ],
// };
