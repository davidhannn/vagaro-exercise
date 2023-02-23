import { request, rawRequest, gql, GraphQLClient } from "graphql-request";
import { API_URL } from "@/constants";
import { CountryType } from "@/types/country";
import useFetch from "./useFetch";
import { useCallback, useEffect, useState } from "react";

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
    }
  }
`;

const useGetCountries = () => {
  // const [countries, setCountries] = useState<CountryType[] | null>(null);

  const { data, loading, error } = useFetch({
    url: API_URL,
    query: GET_COUNTRIES,
  });

  if (!data || loading) {
    return null;
  }

  return {
    data,
    loading,
    error,
  };
};

export default useGetCountries;
