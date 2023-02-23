import useGetCountry from "@/hooks/useGetCountry";
import React from "react";

type HeroProps = {
  backgroundColor: string;
};

// . Return the query props of name, emoji , image-url and language name from the forementioned GraphQL endpoint. Map data to each hero title, subtitle, hero image, and country icon.

//  If the image is null, the hero should display a missing image message in its place.
const Hero: React.FC = ({}) => {
  const data = useGetCountry({ code: "US" });

  const { country, loading, error } = data || {};

  console.log(country, "country");

  const { code, name, emoji, emojiU, languages } = country || {};
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="flex-col justify-center items-center">
        <h1 className="">{name}</h1>
        <img src={emojiU} />
        <p>{emoji}</p>
        {/* <h1>{country?.name}</h1>
      <h2>{country?.code}</h2> */}
      </div>
    </div>
  );
};

export default React.memo(Hero);
