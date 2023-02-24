import useGetCountry from "@/hooks/useGetCountry";
import { CountryType } from "@/types/country";
import Hero from "@/components/Hero";
import { usePathname } from "next/navigation";
import DropdownComponent from "@/components/Dropdown";

const Country: React.FC = () => {
  const pathName = usePathname()?.split("/")[2];

  return (
    <div>
      <Hero code={pathName} />
    </div>
  );
};

export default Country;
