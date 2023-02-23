import useGetCountry from "@/hooks/useGetCountry";
import { CountryType } from "@/types/country";
import Hero from "@/components/Hero";
import { usePathname } from "next/navigation";

const Country: React.FC = () => {
  const pathName = usePathname()?.split("/")[2];

  return <Hero code={pathName} />;
};

export default Country;
