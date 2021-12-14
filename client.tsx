import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://swapi.apis.guru/',
    cache: new InMemoryCache()
  });

  export default client;