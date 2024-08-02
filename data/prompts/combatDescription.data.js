const prompt = `Describe concisely a ${subclass} ${playerClass} slaying ${
  num > 1 ? num : "a"
} ${
  creature + num > 1 && "s"
} with ${attack} in ${environment} in 1st person and should not include mention of the subclass or class necessarily. ${lightLevel}, ${
  darkVision &&
  `,${darkVision} don't mention this explictly just a detail to note,`
} ${combatOver} //there are other foes to face after this//. The ${
  num > 1 ? `${creature}s` : creature
} ${
  healthLevel !== "healthy" && "from its fight with the party"
}. This is a description to be read aloud to tell the rest of the party in a slightly cinematic manner how the deed is done. It should use natural language, and sound like what a player's answer might be at a table when the DM asks "How do you want to do this?" Be as violent as you can be without going against your policy. 
`;
