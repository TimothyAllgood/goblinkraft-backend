const seedrandom = require("seedrandom");

const rollStats = (seed) => {
  const stats = [
    { name: "Strength" },
    { name: "Dexterity" },
    { name: "Constitution" },
    { name: "Intelligence" },
    { name: "Wisdom" },
    { name: "Charisma" },
  ];

  stats.map((stat) => {
    const rng = seedrandom(seed + stat.name);

    stat.val = Math.floor(rng() * 20) + 1;
    return stat;
  });
  return stats;
};

module.exports = rollStats;
