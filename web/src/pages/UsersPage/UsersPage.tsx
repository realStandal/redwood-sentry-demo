import { MetaTags } from '@redwoodjs/web'

import UsersCell from 'src/components/UsersCell'

const UsersPage = () => {
  return (
    <>
      <MetaTags title="Users" />
      <p className="text-lg font-medium">Prisma Transaction</p>
      <p>
        This page invokes the <span className="font-mono">users</span> GraphQL
        service, triggering a Prisma query which is logged using Sentry
        performance-tracing.
      </p>
      <UsersCell />
    </>
  )
}

export default UsersPage
