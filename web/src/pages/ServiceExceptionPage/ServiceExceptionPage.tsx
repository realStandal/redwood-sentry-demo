import { MetaTags } from '@redwoodjs/web'

import ServiceExceptionCell from 'src/components/ServiceExceptionCell'

const ServiceExceptionPage = () => {
  return (
    <>
      <MetaTags title="ServiceException" description="ServiceException page" />
      <p className="text-lg font-medium">Service Exception</p>
      <p>
        This page invokes the <span className="font-mono">getException</span>{' '}
        GraphQL service, triggering and reporting an error to Sentry.
      </p>
      <ServiceExceptionCell />
    </>
  )
}

export default ServiceExceptionPage
