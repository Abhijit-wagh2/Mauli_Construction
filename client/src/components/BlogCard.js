import React from 'react'

function BlogCard(props) {
  return (
   
     
        <div className="testimonial-wrap">
          <div className="testimonial-item">
            

      <img
        src={props.image ? `/api/v1/product/product-photo/${props.image}` : '/placeholder-image.jpg' }
        className={`testimonial-img ${!props.image && 'hidden'}`}
        alt=""
    />


          

          <div className='separate'>
            <h3>{props.name}</h3>
            
            {/* <h4>{props.identity}</h4> */}
            <div className="stars">
              <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
            </div>
            <p>
              <i className="d-flex flex-wrap"></i>
              {props.review}
              <i className="bi bi-quote quote-icon-right"></i>
            </p>

            </div>
          </div>
        </div>
      
  )
}

export default BlogCard