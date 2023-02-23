import { request, gql, GraphQLClient } from "graphql-request";
import { API_URL } from "@/constants";
import { CountryType } from "@/types/country";

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

const useGetCountries = async () => {
  const data: CountryType[] = await request(API_URL, GET_COUNTRIES);

  console.log(data);

  return {
    data,
  };
};

export default useGetCountries;
