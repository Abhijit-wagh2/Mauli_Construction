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
import Techniques from './Techniques';
function Layout({children}) {
  return (
    <div>
        <Home/>
        <About/>
        <Services/>
        <Features/>
        <Blog/>
        <main>
        <Toaster />
            {children}
        </main>
        
        
        <ReachUs/>
        <Footer/>
        <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    </div>
  )
}

export default Layout
