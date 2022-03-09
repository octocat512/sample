import { GraphQLClient } from "graphql-request";
import { useQuery } from "react-query";
export const GRAPH_ENDPOINT =
  "https://api.studio.thegraph.com/query/9379/silo/0.23.k";

const GRAPHQL_CLEINT_HEADERS = {
  "Access-Control-Allow-Origin": "https://thegraph.com",
};

export const MARKET_QUERY_KEY = "siloMarketData";

const siloMarketsQuery = `
  {
    silos {
      id
      address
      asset
      assetSymbol
      assetName
    }
  }
  `;

export const fetchSiloData = async () => {
  const client = new GraphQLClient(GRAPH_ENDPOINT);
  client.setHeaders(GRAPHQL_CLEINT_HEADERS);
  return await client.request(siloMarketsQuery);
};

const useSiloMarkets = () => {
  // implement this with react query
  return useQuery("SiloMarkets", async () => {
    const data = await fetchSiloData();
    return data["silos"];
  });
};

export default useSiloMarkets;
