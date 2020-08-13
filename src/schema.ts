import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    rockets: [Rocket]!
  }

  type Rocket {
    id: ID!
    name: String
  }
`;
