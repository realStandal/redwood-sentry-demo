import { MetaTags } from '@redwoodjs/web'

import UnauthenticatedServiceExceptionCell from 'src/components/UnauthenticatedServiceExceptionCell'
import Sentry from 'src/lib/sentry'

const UnauthenticatedExceptionPage = () => {
  // We want make sure the current user is reset on each render
  Sentry.setUser(null)

  return (
    <>
      <MetaTags title="Unauthenticated Exception" />
      <p className="text-lg font-medium">Unauthenticated Exception</p>
      <p>
        This page invokes the{' '}
        <span className="font-mono">getUnauthenticatedException</span> GraphQL
        service, triggering and reporting an error to Sentry.
      </p>
      <UnauthenticatedServiceExceptionCell />
    </>
  )
}

export default UnauthenticatedExceptionPage
