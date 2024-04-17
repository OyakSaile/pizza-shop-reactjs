import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="p-8">
        <h1>Dashboard</h1>
      </div>
    </>
  )
}
