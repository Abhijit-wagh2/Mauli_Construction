import React from 'react'

function FeaturesCard(props) {
  return (
    <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-easel flex-shrink-0"></i>
              <div>
                <h4>{props.name}</h4>
                <p>{props.text}</p>
              </div>
            </div>

  )
}

export default FeaturesCard