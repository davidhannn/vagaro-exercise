import { request, gql, GraphQLClient } from "graphql-request";
import { API_URL } from "@/constants";

const GET_COUNTRY = gql`
  query getCountry($code: ID!) {
    country(code: $code) {
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

type Props = {
  code: string;
};

const useGetCountry = async (code: Props) => {
  const data = await request({
    url: API_URL,
    document: GET_COUNTRY,
    variables: { code: "AF" },
  });

  return {
    data,
  };
};

export default useGetCountry;
