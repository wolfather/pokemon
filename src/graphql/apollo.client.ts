import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ENDPOINT } from "./endpoint";

export const apolloClient = new ApolloClient({
    uri: ENDPOINT,
    cache: new InMemoryCache()
});
