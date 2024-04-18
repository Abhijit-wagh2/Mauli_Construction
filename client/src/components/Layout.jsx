import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast';
import ReachUs from './ReachUs';
import Blog from './Blog';
import Features from './Features';
import Services from './Services';
import Home from './Home';
import About from './About';

function Layout({children}) {
  return (
    <div>
        <Home/>
        <About/>
        <Services/>
        <Features/>
        
        <main>
        <Toaster />
            {children}
        </main>
        <Blog/>
        <ReachUs/>
        <Footer/>
    </div>
  )
}

export default Layout
