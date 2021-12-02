import { 
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
  uri: 'https://frontend-rayaflasher.hasura.app/v1/graphql',
  headers: {
        'x-hasura-admin-secret' : 'AwnRo5OfdxnYGvcXPRWypBY9Q27T2ZM2ax91fBZ45BlV1qgnuwakoZ6lF0F9f6Fx'
  }
});

const wsLink = new WebSocketLink({
  uri: 'wss://frontend-rayaflasher.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
        headers: {
            'x-hasura-admin-secret' : 'AwnRo5OfdxnYGvcXPRWypBY9Q27T2ZM2ax91fBZ45BlV1qgnuwakoZ6lF0F9f6Fx'
        }
    }
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;