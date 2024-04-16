import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServiceCard(props) {
  return (
    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div className="service-item  position-relative">
        <div className="icon">
          {/* Render the icon dynamically based on the props */}
          <FontAwesomeIcon icon={props.icon} style={{fontSize: '2rem' ,zIndex:"3" }}/>
        </div>
        <h3>{props.service}</h3>
        <p>{props.description}</p>
         </div>
    </div>
  );
}

export default ServiceCard;
