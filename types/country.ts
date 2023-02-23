export type CountryType = {
  code: String;
  name: String;
  emoji: String;
  emojiU: String;
  languages: LanguageType[];
  continent: ContinentType;
};

export type LanguageType = {
  name: String;
};

export type ContinentType = {
  code: String;
};

export type LayoutType = Omit<
  CountryType,
  "emojiU" | "languages" | "continent"
>;
