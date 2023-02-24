import useGetCountry from "@/hooks/useGetCountry";
import React, { useCallback, useEffect } from "react";
import LayoutOne from "@/layouts/layout-one";
import LayoutDefault from "@/layouts/layout-default";
import LayoutTwo from "@/layouts/layout-two";
import { pickBgColorByContinent } from "@/utils/index";
import DropdownComponent from "./Dropdown";
import { parseCodepoint } from "@/utils/index";
import { ContinentType } from "@/types/country";

type HeroProps = {
  code?: string;
};

// . Return the query props of name, emoji , image-url and language name from the forementioned GraphQL endpoint. Map data to each hero title, subtitle, hero image, and country icon.
//  If the image is null, the hero should display a missing image message in its place.

const Hero: React.FC<HeroProps> = ({ code = "US" }: HeroProps) => {
  console.log(code, "what code is being passed");
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
      className={"h-screen"}
      style={{ backgroundColor: pickBgColorByContinent(continent?.code) }}
    >
      <DropdownComponent />
      <div
        className={`flex justify-center items-center h-full`}
        style={{ backgroundColor: pickBgColorByContinent(continent?.code) }}
      >
        {changeLayout()}
      </div>
    </div>
  );
};

export default Hero;
