import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const client = new ApolloClient({
  uri: endpoint,

  link: new createHttpLink({
    credentials: "include",
    headers: {
      "Content-Type": "application/graphql",
      "X-Shopify-Storefront-Access-Token": key,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
