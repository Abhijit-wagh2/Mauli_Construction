import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Map from './Map';

function ReachUs() {
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
    <section id="get-started" className="get-started section-bg">
      
    <div className="container">
        <div className="row justify-content-between gy-4">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
            <div className="content">
              <h3>Connect with Us</h3>
              <p>Have a doubt? Feel free to ask here.</p>
            </div>
          </div>

          <div className="col-lg-5" data-aos="fade">
            <form onSubmit={handleSubmit} className="php-email-form">
              <h3>Ask</h3>
              <p>You can reach out to us by sending us a message or asking any question of your interest. We would love to listen from you.</p>
              <div className="row gy-3">
                <div className="col-md-12">
                  <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" required/>
                </div>
                <div className="col-md-12 ">
                  <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                </div>
                <div className="col-md-12">
                  <input type='number' className="form-control" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required/>
                </div>
                <div className="col-md-12">
                  <textarea className="form-control" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="6" placeholder="Message" required></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Map/>
      
    </section>
  );
}

export default ReachUs;
