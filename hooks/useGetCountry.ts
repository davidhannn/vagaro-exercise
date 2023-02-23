import { request, gql, GraphQLClient } from "graphql-request";
import { useState } from "react";
import useFetch from "./useFetch";
import { API_URL } from "@/constants";

const GET_COUNTRY = gql`
  query getCountry($code: ID!) {
    country(code: $code) {
      code
      name
      emoji
      emojiU
      native
      languages {
        name
      }
      continent {
        code
      }
    }
  }
`;

type Props = {
  code: string;
};

const useGetCountry = ({ code }: { code: string }) => {
  const { data, loading, error } = useFetch({
    url: API_URL,
    query: GET_COUNTRY,
    variables: { code },
  });

  if (!data || loading || error) {
    return null;
  }

  return {
    country: data?.country,
    loading,
    error,
  };
};

export default useGetCountry;
