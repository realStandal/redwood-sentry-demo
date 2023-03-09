export const schema = gql`
  type Query {
    getException: Boolean @requireAuth
    getUnauthenticatedException: Boolean @skipAuth
  }
`
