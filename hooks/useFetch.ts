import { useEffect, useState } from "react";
import { request, rawRequest, gql, GraphQLClient } from "graphql-request";

import { Variables } from "graphql-request";

type FetchProps = {
  url: string;
  query: string;
  variables?: Variables;
};

const useFetch = ({ url, query, variables = {} }: FetchProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | unknown>("");

  useEffect(() => {
    async function handleFetch() {
      setLoading(true);
      try {
        const data = await request(url, query, variables);
        setData(data);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    handleFetch();
  }, [url, query]);

  return { data, loading, error };
};

export default useFetch;
