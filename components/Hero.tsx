import useGetCountry from "@/hooks/useGetCountry";
import React, { useCallback } from "react";
import LayoutOne from "@/layouts/layout-one";
import LayoutDefault from "@/layouts/layout-default";
import LayoutTwo from "@/layouts/layout-two";
import { pickBgColorByContinent } from "@/utils/index";
import { parseCodepoint } from "@/utils/index";
import { ContinentType } from "@/types/country";

type HeroProps = {
  code?: string;
};

// . Return the query props of name, emoji , image-url and language name from the forementioned GraphQL endpoint. Map data to each hero title, subtitle, hero image, and country icon.
//  If the image is null, the hero should display a missing image message in its place.

const Hero: React.FC<HeroProps> = ({ code = "US" }: HeroProps) => {
  const data = useGetCountry({ code });

  const { country, loading, error } = data || {};

  const {
    code: countryCode,
    name,
    emoji,
    emojiU,
    languages,
    continent,
  } = country || {};

  // console.log(continent);

  const changeLayout = () => {
    switch (continent?.code) {
      case "NA":
        return <LayoutTwo name={name} code={countryCode} emoji={emoji} />;
      case "EU":
        return <LayoutOne name={name} code={countryCode} emoji={emoji} />;
      default:
        return <LayoutDefault name={name} code={countryCode} emoji={emoji} />;
    }
  };

  return (
    <div
      className={`flex justify-center items-center h-screen`}
      style={{ backgroundColor: pickBgColorByContinent(continent?.code) }}
    >
      {changeLayout()}
    </div>
    // <div
    //   className={`flex justify-center items-center h-screen ${pickBgColorByContinent(
    //     continent?.code
    //   )}`}
    // >

    // </div>
    // <div className="flex justify-center items-center bg-pink-300 h-screen">
    //   <div className="flex-col justify-center items-center text-center">
    //     <h1 className="text-5xl mb-5">{name}</h1>
    //     <h2 className="text-2xl mb-5">{countryCode}</h2>

    //     {/* <p>{String.fromCodePoint(0x1f354)}</p> */}
    //     <p className="text-7xl">{emoji}</p>

    //     {/* {emojiU && parseCodepoint(emojiU)} */}
    //     {/* <h1>{country?.name}</h1>
    //   <h2>{country?.code}</h2> */}
    //   </div>
    // </div>
  );
};

export default Hero;
