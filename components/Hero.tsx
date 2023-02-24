import useGetCountry from "@/hooks/useGetCountry";
import React, { useCallback, useEffect } from "react";
import LayoutOne from "@/layouts/layout-one";
import LayoutDefault from "@/layouts/layout-default";
import LayoutTwo from "@/layouts/layout-two";
import { pickBgColorByContinent } from "@/utils/index";
import DropdownComponent from "./Dropdown";
import { parseCodepoint } from "@/utils/index";
import { ContinentType } from "@/types/country";
import styles from "@/styles/Hero.module.css";
import { CONTINENT_CODES } from "@/constants";

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

  const changeLayout = () => {
    switch (continent?.code) {
      case CONTINENT_CODES.NA:
      case CONTINENT_CODES.AN:
        return <LayoutOne name={name} code={countryCode} emoji={emoji} />;
      case CONTINENT_CODES.AS:
      case CONTINENT_CODES.EU:
        return <LayoutTwo name={name} code={countryCode} emoji={emoji} />;
      default:
        return <LayoutDefault name={name} code={countryCode} emoji={emoji} />;
    }
  };

  const imageBackground = () => {
    switch (continent?.code) {
      case CONTINENT_CODES.NA:
        return "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
      case CONTINENT_CODES.EU:
        return "https://images.pexels.com/photos/269790/pexels-photo-269790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
      case CONTINENT_CODES.AF:
        return "https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
      case CONTINENT_CODES.AN:
        return "https://images.pexels.com/photos/48178/mountains-ice-bergs-antarctica-berg-48178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
      case CONTINENT_CODES.AS:
        return "https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&w=1600";
      case CONTINENT_CODES.SA:
        return "https://images.pexels.com/photos/2017747/pexels-photo-2017747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
      case CONTINENT_CODES.OC:
        return "https://images.pexels.com/photos/13327947/pexels-photo-13327947.jpeg?auto=compress&cs=tinysrgb&w=1600";
      default:
        return "";
    }
  };

  return (
    <div
      className={"h-screen"}
      style={{
        backgroundColor: pickBgColorByContinent(continent?.code),
      }}
    >
      <DropdownComponent />
      <div
        // className="image-background"
        className={`flex justify-center items-center h-full bg-cover bg-gradient-to-tr from-red-500 to-transparent`}
        style={{
          backgroundImage: `url(${imageBackground()})`,
        }}
        // style={{ backgroundColor: pickBgColorByContinent(continent?.code) }}
      >
        {/* <p className={styles.test}>test</p> */}
        {changeLayout()}
      </div>
    </div>
  );
};

export default Hero;
