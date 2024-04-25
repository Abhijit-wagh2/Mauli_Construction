import React from 'react'

function BlogCard(props) {
  return (
   
      <div className="swiper-slide">
        <div className="testimonial-wrap">
          <div className="testimonial-item">
          {/* <img src={props.image} class="testimonial-img" alt=""/> */}
            <h3>{props.name}</h3>
            {/* <h4>{props.identity}</h4> */}
            <div className="stars">
              <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
            </div>
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              {props.review}
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
          </div>
        </div>
      </div>
  )
}

export default BlogCard