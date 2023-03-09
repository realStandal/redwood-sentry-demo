import { RedwoodGraphQLError } from '@redwoodjs/graphql-server'

import Sentry from 'src/lib/sentry'

export const getException = () => {
  throw new RedwoodGraphQLError('ServiceException')
}

export const getUnauthenticatedException = () => {
  Sentry.setUser(null)

  throw new RedwoodGraphQLError('UnauthenticatedException')
}
