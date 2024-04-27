import React from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import Map from './Map';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[a-z]{3,3}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^\d{10}$/i.test(values.phone)) {
    errors.phone = 'Invalid phone number';
  }

  if (!values.message) {
    errors.message = 'Required';
  }

  return errors;
};

function ReachUs() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validate,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const serviceId = "service_w3am0zi";
      const templateId = "template_bbuhb78";
      const publicKey = "Gh5KZszbfQYKWqFmt";

      const templateParams = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("email sent successfully", response);
          alert('Your message has been sent successfully. Thank you!');
          resetForm();
        })
        .catch((error) => {
          console.log("Error sending mail", error);
          alert('Error sending mail. Please try again later.');
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

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
            <form onSubmit={formik.handleSubmit} className="php-email-form">
              <h3>Ask</h3>
              <p>You can reach out to us by sending us a message or asking any question of your interest. We would love to listen from you.</p>
              <div className="row gy-3">
                <div className="col-md-12">
                  <input type="text" name="name" id="name" className="form-control" placeholder="Name" {...formik.getFieldProps('name')} />
                  {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span> : null}
                </div>
                <div className="col-md-12 ">
                  <input type="email" name="email" id="email" className="form-control" placeholder="Email" {...formik.getFieldProps('email')} />
                  {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
                </div>
                <div className="col-md-12">
                  <input type='tel' name="phone" id="phone" className="form-control" placeholder="Phone" {...formik.getFieldProps('phone')} />
                  {formik.touched.phone && formik.errors.phone ? <span>{formik.errors.phone}</span> : null}
                </div>
                <div className="col-md-12">
                  <textarea name="message" id="message" className="form-control" rows="6" placeholder="Message" {...formik.getFieldProps('message')} />
                  {formik.touched.message && formik.errors.message ? <span>{formik.errors.message}</span> : null}
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit" disabled={formik.isSubmitting}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Map />
    </section>
  );
}

export default ReachUs;
