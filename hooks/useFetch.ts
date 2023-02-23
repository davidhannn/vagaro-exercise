import { useEffect, useState } from "react";
import { request, rawRequest, gql, GraphQLClient } from "graphql-request";

type FetchProps = {
  url: string;
  query: string;
};

const useFetch = ({ url, query }: FetchProps) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function handleFetch() {
      setLoading(true);
      try {
        const data = await request(url, query);
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
