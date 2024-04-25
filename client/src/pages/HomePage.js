import React from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../context/auth.js'
import Products from './Admin/Product.js';
import BlogSection from './Admin/Section/BlogSection.js';
import ArticleSection from './Admin/Section/ArticleSection.js';

function HomePage() {
  const [auth , setAuth] = useAuth();
  return (
      <Layout>
      <Products/>
      <BlogSection/>
      <ArticleSection/>
      </Layout>
  )
}

export default HomePage
