import { API_URL } from "@/constants";
import { CountryType } from "@/types/country";
import { gql } from "graphql-request";
import useFetch from "./useFetch";

const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      code
      name
      emoji
      emojiU
      languages {
        name
      }
      continent {
        code
      }
    }
  }
`;

type ReturnProps = {
  countries: CountryType[];
  loading: false;
  error: unknown;
};

const useGetCountries: () => ReturnProps | null = () => {
  const { data, loading, error } = useFetch({
    url: API_URL,
    query: GET_COUNTRIES,
  });

  if (!data || loading || error) {
    return null;
  }

  return {
    countries: data?.countries,
    loading,
    error,
  };
};

export default useGetCountries;
