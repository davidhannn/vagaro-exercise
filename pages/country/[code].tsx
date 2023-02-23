import useGetCountry from "@/hooks/useGetCountry";
import { CountryType } from "@/types/country";
useGetCountry;
import Hero from "@/components/Hero";
import { usePathname } from "next/navigation";

const Country: React.FC = (props) => {
  const pathName = usePathname()?.split("/")[2];
  const data = useGetCountry({ code: pathName! });

  return <Hero code={pathName} />;
  // return <div>{name}</div>;
};

export default Country;
