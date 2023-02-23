import { request, gql, GraphQLClient } from "graphql-request";

const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      name
      emoji
      emojiU
      languages {
        name
      }
    }
  }
`;
const API_URL = "https://countries.trevorblades.com/graphql";

const useGetCountries = () => {
  const data = request(API_URL, GET_COUNTRIES).then((data) =>
    console.log(data)
  );
  // const client = new GraphQLClient(API_URL);
  // client
  //   .request({ url: API_URL, query: GET_COUNTRIES })
  //   .then((data) => console.log(data, "data"));
};

export default useGetCountries;
