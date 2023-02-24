export const parseCodepoint = (emojiU) => {
  console.log(emojiU, "here!");
  return emojiU.split(" ")[0].replace("U+", "&#x");
};

export const pickBgColorByContinent = (code) => {
  switch (code) {
    case "AF":
      return "rgb(252 165 165)";
    case "AN":
      return "rgb(253 186 116)";
    case "AS":
      return "rgb(94 234 212)";
    case "EU":
      return "rgb(147 197 253)";
    case "NA":
      return "rgb(165 180 252)";
    case "OC":
      return "rgb(125 211 252)";
    case "SA":
      return "rgb(199 210 254)";
    default:
      return "rgb(240 171 252)";
  }
};
