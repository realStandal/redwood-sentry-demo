import { useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

const FunctionExceptionPage = () => {
  useEffect(() => {
    ;(async () => {
      await fetch(`${window.location.origin}/.redwood/functions/exception`)
    })()
  }, [])

  return (
    <>
      <MetaTags title="Function exception" />
      <p className="text-lg font-medium">Function Exception</p>
      <p>
        This page invokes the serverless function{' '}
        <span className="font-mono">/exception</span>, triggering and reporting
        an error to Sentry.
      </p>
    </>
  )
}

export default FunctionExceptionPage
