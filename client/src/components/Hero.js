import React from 'react'
import image1 from '../components/img/home1.png';
function Hero() {
  return (
    
  <section id="hero" className="hero">

  <div className="info d-flex align-items-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="text-center">
          <h2 data-aos="fade-down">Welcome to Mauli Construction</h2>
          <p data-aos="fade-up">" A House Isn't Just a House, It's a Reflection of Who You are.."</p>
          <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started">Get Started</a>
        </div>
      </div>
    </div>
  </div>

  <div id="hero-carousel" className="carousel slide" >

  <div className="carousel-item active" style={{backgroundImage: `url(${image1})`}} ></div>
  
  </div>

</section>
  )
}

export default Hero