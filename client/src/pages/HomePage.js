import React from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../context/auth.js'

function HomePage() {
  const [auth , setAuth] = useAuth();
  return (
    <Layout>
      <h1>HomePage</h1>
      <h1>
        {JSON.stringify(auth , null ,4)}
      </h1>
    </Layout>
  )
}

export default HomePage
