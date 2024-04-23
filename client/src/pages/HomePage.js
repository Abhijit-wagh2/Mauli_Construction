import React from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../context/auth.js'
import Products from './Admin/Product.js';

function HomePage() {
  const [auth , setAuth] = useAuth();
  return (
      <Layout>
      <Products/>
      </Layout>
  )
}

export default HomePage
