const interpolateDescription = (template, pronouns) => {
  const interpolated = template
    .replace(/\${subject}/g, pronouns.subject)
    .replace(/\${object}/g, pronouns.object)
    .replace(/\${possessive}/g, pronouns.possessive);
  return capitalizeFirstWordOfDescription(interpolated);
};

const capitalizeFirstWord = (text) => {
  // Capitalize the first word of the entire description
  const capitalizedFirstWord = text.replace(/^[a-z]/, (match) =>
    match.toUpperCase()
  );

  // Capitalize the first word of each sentence
  const fullyCapitalized = capitalizedFirstWord.replace(
    /(^|\.\s+|\?\s+|\!\s+)([a-z])/g,
    (match) => match.toUpperCase()
  );

  return fullyCapitalized;
};

module.exports = {
  interpolateDescription,
  capitalizeFirstWord,
};
