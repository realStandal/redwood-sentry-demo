import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/lib/auth'

const HomePage = () => {
  const { logOut } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="flex flex-row items-center justify-end py-6 px-12">
        <button className="rw-link" onClick={logOut}>
          Logout
        </button>
      </div>
    </>
  )
}

export default HomePage
