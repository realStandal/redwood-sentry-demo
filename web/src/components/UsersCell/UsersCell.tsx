import type { UsersQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query UsersQuery {
    users {
      id
      email
    }
  }
`

export const Loading = () => <p>Loading...</p>

export const Empty = () => <p>Empty</p>

export const Failure = ({ error }: CellFailureProps) => (
  <p style={{ color: 'red' }}>Error: {error?.message}</p>
)

export const Success = ({ users }: CellSuccessProps<UsersQuery>) => {
  return (
    <ul className="list-inside list-disc">
      {users.map((item) => {
        return <li key={item.id}>{item.email}</li>
      })}
    </ul>
  )
}
