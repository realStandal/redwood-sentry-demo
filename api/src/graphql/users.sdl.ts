export const schema = gql`
  type User {
    id: ID!
    email: String!
  }

  type Query {
    users: [User!]! @requireAuth
  }
`
