import useGetCountry from "@/hooks/useGetCountry";
import React from "react";
import { parseCodepoint } from "@/utils/index";

type HeroProps = {
  code: string;
};

// . Return the query props of name, emoji , image-url and language name from the forementioned GraphQL endpoint. Map data to each hero title, subtitle, hero image, and country icon.

//  If the image is null, the hero should display a missing image message in its place.
const Hero: React.FC<HeroProps> = ({ code = "US" }: HeroProps) => {
  const data = useGetCountry({ code });
  // const data = useGetCountry({ code: "US" });

  const { country, loading, error } = data || {};

  const { code: countryCode, name, emoji, emojiU, languages } = country || {};
  // if (emojiU) {
  //   console.log(parseCodepoint(emojiU), "emoji u");
  // }
  return (
    <div className="flex justify-center items-center bg-pink-300 h-screen">
      <div className="flex-col justify-center items-center text-center">
        <h1 className="text-5xl mb-5">{name}</h1>
        <h2 className="text-2xl mb-5">{countryCode}</h2>

        <p className="text-5xl">{String.fromCodePoint(0x1f354)}</p>
        <p>{emoji}</p>

        {/* {emojiU && parseCodepoint(emojiU)} */}
        {/* <h1>{country?.name}</h1>
      <h2>{country?.code}</h2> */}
      </div>
    </div>
  );
};

export default Hero;
