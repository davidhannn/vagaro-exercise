import useGetCountries from "@/hooks/useGetCountries";
import { CountryType } from "@/types/country";
import Link from "next/link";

const Countries: React.FC = () => {
  const data = useGetCountries();

  const { countries, loading, error } = data || {};

  return (
    <div>
      {countries?.map((country: CountryType) => (
        <li key={country.code}>
          <Link href={`/country/${country.code}`}>
            <div>{country.name}</div>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Countries;
