import { gql, GraphQLClient } from "graphql-request";

const storefrontAccessToken: string = process.env
  .SHOPIFY_STOREFRONT_ACCESS as string;
const endpoint: string = process.env.SHOPIFY_STORE_DOMAIN as string;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
  },
});
