import React,{useState} from 'react'
import emailjs from '@emailjs/browser';
import Map from '../components/Map'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom';
import image from '../components/img/home1.png'
import ReachUs from '../components/ReachUs';
function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_37l7w4o";
    const templateId = "template_nzn6tn9";
    const publicKey = "DK7lAARSF3aqYroPP";

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("email sent successfully", response);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      })
      .catch((error) => {
        console.log("Error sending mail", error);
      });
  };

  return (

    
    <div className='contact'>
    
  
  <main id="main">

    <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: `url(${image})`}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Contact</h2>
        <ol>
          <li><NavLink to="/">Home</NavLink></li>
          <li>Contact</li>
        </ol>

      </div>
    </div>

    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-map"></i>
              <h3>Our Address</h3>
              <p>26, Renuka Complex,<br/>
              near Bus Stand, Bajartal,<br/> 
              Chandwad, Maharashtra 423101</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p> mangeshshelke10@gmail.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>+91 7387171034</p>
            </div>
          </div>

        </div>

        <div className="row gy-4 mt-1">

        <ReachUs/>
        </div>

      </div>
    </section>

  </main>
<Footer/>
  
  <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

  <div id="preloader"></div>

</div>
  )
}

export default Contact