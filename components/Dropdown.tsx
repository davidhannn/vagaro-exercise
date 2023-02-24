import useGetCountries from "@/hooks/useGetCountries";
import { CountryType } from "@/types/country";
import { useRouter } from "next/navigation";

import { ChangeEvent } from "react";

const DropdownComponent = () => {
  const data = useGetCountries();
  const router = useRouter();

  const { countries, loading, error } = data || {};

  const handleNavigation = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    router.push(`/country/${e.target.value}`);
  };

  return (
    <div className="relative w-full lg:max-w-sm pt-4 pb-4 ">
      <select
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
        onChange={(value) => handleNavigation(value)}
      >
        <option value="none" selected disabled hidden>
          Select a country
        </option>
        {countries?.map((country: CountryType, index) => (
          <option value={country.code} key={index}>
            <p>{country.emoji}</p>
            <p>{country.name}</p>
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
