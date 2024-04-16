import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast';
import ReachUs from './ReachUs';
import Blog from './Blog';
import Features from './Features';
import Services from './Services';
import Home from './Home';

function Layout({children}) {
  return (
    <div>
        <Home/>
        <Services/>
        <Features/>
        <Blog/>
        <main>
        <Toaster />
            {children}
        </main>
        
        <ReachUs/>
        <Footer/>
    </div>
  )
}

export default Layout
