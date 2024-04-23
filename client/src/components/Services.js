import React from 'react';
import { faComment, faTools, faMoneyBill, faLevelUp,faBuilding, faPaintBrush, faLandmark, } from '@fortawesome/free-solid-svg-icons'; // Importing different icons

import ServiceCard from './ServiceCard';

function Services() {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Services</h2>
          <p>We offer a variety of services in the area of Engineering Design</p>
        </div>

        <div className="row gy-4">
          {/* Pass different icons as props to each ServiceCard */}
          <ServiceCard icon={faComment} service="Construction Consultancy" description="Expert guidance for successful construction projects. Our consultancy service ensures strategic planning and efficient project management, maximizing outcomes and minimizing risks."/>
          <ServiceCard icon={faTools} service="Planning" description="Strategic blueprints for seamless construction projects. Our planning service provides meticulous analysis and detailed roadmaps, ensuring projects are executed with precision and efficiency."/>
          <ServiceCard icon={faBuilding} service="RCC Design & Supervision" description="Structural integrity ensured with precision. Our RCC design and supervision service offers meticulous oversight, ensuring robust structures and adherence to industry standards."/>
          <ServiceCard icon={faMoneyBill} service="Estimation & Valuation" description="Structural integrity ensured with precision. Our RCC design and supervision service offers meticulous oversight, ensuring robust structures and adherence to industry standards."/>
          <ServiceCard icon={faLevelUp} service="3D Elevations" description="Structural integrity ensured with precision. Our RCC design and supervision service offers meticulous oversight, ensuring robust structures and adherence to industry standards."/>
          <ServiceCard icon={faPaintBrush} service="Exterior and Interior Designing" description="Elevating spaces with aesthetic brilliance. Our exterior and interior design service transforms environments, blending creativity with functionality to create captivating and harmonious living and working spaces."/>
          <ServiceCard icon={faLandmark} service="N.A. Layouts" description="Unlocking potential through thoughtful layouts. Our N.A. layouts service crafts strategic plans tailored to optimize land use, fostering sustainable and harmonious communities."/>
          {/* Add more ServiceCards with different icons as needed */}
        </div>
      </div>
    </section>
  );
}

export default Services;
