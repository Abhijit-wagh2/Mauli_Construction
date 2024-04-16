import React from 'react'
import image3 from '../components/img/image3.jpg'
import FeaturesCard from './FeaturesCard'
function Features() {
  return (
   
    <section id="features" className="alt-services">
      <div className="container" data-aos="fade-up">

        <div className="row justify-content-around gy-4">
        <div className="col-lg-6 img-bg" style={{backgroundImage: `url(${image3})`}} data-aos="zoom-in" data-aos-delay="100"></div>

          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <h3>Features</h3>
            <p>Harmony in Design: Embrace Vastu Shastra Principles for Serene Living, Traditional Charm, Modern Comfort :Bridging the Past and Present</p>

            <FeaturesCard name="Vastu Shastra" text="A peaceful living space according to Vastu principles"/>
            <FeaturesCard name="Environment care" text="Rain water harvesting roofs"/>
            <FeaturesCard name="Trendy Decor" text="Aesthetic interior decor"/>
            <FeaturesCard name="Affordable Housing" text="Dream Home in your budget"/>
            <FeaturesCard name="Renovation Maintenance" text="Transform old look into a new one"/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features