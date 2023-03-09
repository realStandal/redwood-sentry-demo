import type { CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ServiceExceptionQuery {
    getException
  }
`

export const Loading = () => <p>Loading...</p>

export const Empty = () => <p>Empty</p>

export const Failure = ({ error }: CellFailureProps) => (
  <p className="text-red-600">{error?.message}</p>
)

export const Success = () => <p>Success!</p>
