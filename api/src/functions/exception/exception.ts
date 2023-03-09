import Sentry from 'src/lib/sentry'

export const handler = async () => {
  try {
    throw new Error('FunctionException')
  } catch (err) {
    Sentry.captureException(err)
    return { statusCode: 500 }
  }
}
