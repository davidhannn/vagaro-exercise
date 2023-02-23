import useGetCountry from "@/hooks/useGetCountry";
import React from "react";

const Hero: React.FC = () => {
  const data = useGetCountry("US");

  console.log(data, "data");
  return (
    <div>
      <p>Hero</p>
    </div>
  );
};

export default React.memo(Hero);
