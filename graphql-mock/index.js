const { ApolloServer, gql } = require("apollo-server");
const schema = require("./schema");
const typeDefs = gql`
  ${schema}
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true
});

server.listen().then(({ url }) => {
  console.log(`🚀 GraphQL Mock Server ready at ${url}`);
});
