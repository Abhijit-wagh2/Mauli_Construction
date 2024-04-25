import React,{useEffect} from 'react'
import ReviewCard from './BlogCard'
import Swiper from 'swiper';
import image from '../components/img/home1.png'
function Blog() {

  useEffect(() => {
    new Swiper('.slides-2', {
      // Configure swiper options here
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);
  return (
    <>
    </>
    
    // <section id="testimonials" className="testimonials section-bg">
    //   <div className="container" data-aos="fade-up">

    //     <div className="section-header">
    //       <h2>Blogs</h2>
    //       <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
    //     </div>

    //     <div className="slides-2 swiper">
    //       <div className="swiper-wrapper">

    //       <ReviewCard image={image} name="Saul Goodman" identity="Ceo &amp; Founder" review=" Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."/>
            
    //       <ReviewCard name="Sara Wilsson" identity="Designer" review=" Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."/>

    //       <ReviewCard name="Jena Karlis" identity="Store Owner" review=" Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."/>

    //       <ReviewCard name="Matt Brandon" identity="Freelancer" review=" Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."/>

    //       <ReviewCard name="John Larson" identity="Entrepreneur" review=" Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."/>

    //       </div>
    //       <div className="swiper-pagination"></div>
    //     </div>

    //   </div>
    // </section>


  )
}

export default Blog