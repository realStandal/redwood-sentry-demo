import { back } from '@redwoodjs/router'

type BackLayoutProps = {
  children?: React.ReactNode
}

const BackLayout = ({ children }: BackLayoutProps) => {
  return (
    <div className="py-6 px-12 space-y-6">
      <button className="text-sm rw-link" onClick={back}>
        Back
      </button>
      {children}
    </div>
  )
}

export default BackLayout
