import { useEffect } from 'react'

import { useAuth } from 'src/lib/auth'
import Sentry from 'src/lib/sentry'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { currentUser } = useAuth()

  useEffect(() => Sentry.setUser(currentUser), [currentUser])

  return <>{children}</>
}

export default AuthLayout
