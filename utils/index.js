export const parseCodepoint = (emojiU) => {
  console.log(emojiU, "here!");
  return emojiU.split(" ")[0].replace("U+", "&#x");
};
