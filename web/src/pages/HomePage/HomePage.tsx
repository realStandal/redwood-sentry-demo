import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/lib/auth'

const HomePage = () => {
  const { isAuthenticated, logOut } = useAuth()

  return (
    <>
      <MetaTags title="Home" />
      <div className="py-4 px-12 space-y-12">
        <div className="flex flex-row items-center justify-end">
          <button
            className="rw-link"
            onClick={isAuthenticated ? logOut : () => navigate(routes.login())}
          >
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </div>
        <div className="space-y-3">
          <p className="font-medium text-lg">Trigger an event</p>
          <p className="text-sm text-zinc-500">
            Once triggered, these event will be visible on your{' '}
            <a
              className="rw-link"
              href="https://sentry.io/issues"
              target="_blank"
              rel="noreferrer"
            >
              Sentry dashboard
            </a>
          </p>
        </div>
        <div className="flex flex-row items-center space-x-4">
          {isAuthenticated && (
            <>
              <Link
                className="w-full p-4 text-center hover:bg-zinc-50 active:bg-zinc-100 rounded border border-zinc-300"
                to={routes.functionException()}
              >
                Function Exception
              </Link>
              <Link
                className="w-full p-4 text-center hover:bg-zinc-50 active:bg-zinc-100 rounded border border-zinc-300"
                to={routes.serviceException()}
              >
                Service Exception
              </Link>
              <Link
                className="w-full p-4 text-center hover:bg-zinc-50 active:bg-zinc-100 rounded border border-zinc-300"
                to={routes.users()}
              >
                Prisma Tracing
              </Link>
            </>
          )}
          <Link
            className="w-full p-4 text-center hover:bg-zinc-50 active:bg-zinc-100 rounded border border-zinc-300"
            to={routes.unauthenticatedException()}
          >
            Unauthenticated Exception
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomePage
