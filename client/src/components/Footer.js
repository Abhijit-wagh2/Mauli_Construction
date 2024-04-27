import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    
  <footer id="footer" className="footer">

  <div className="footer-content position-relative">
    <div className="container">
      <div className="row">

        <div className="col-lg-6 col-md-6">
          <div className="footer-info">
            <h3>Mauli Construction and <br />Interior Services</h3>
            <p>
              Main Office : 26, Renuka Complex,near Bus Stand, Bajartal,<br/> 
              Chandwad, Maharashtra 423101<br/><br/>
              Branch Office : Near HDFC bank,service road, Vadalibhoi<br/> 
              Chandwad, Maharashtra 423101<br/><br/>
              <strong>Phone:</strong> +91 7387171034<br/>
              <strong>Email:</strong> mangeshshelke10@gmail.com<br/>
            </p>
            <div className="social-links d-flex mt-3">
              <a href="https://youtube.com/@MauliConstructionsInterio?si=9A-^Ekfa-XeB4iEs" className="d-flex align-items-center justify-content-center"><i className="bi bi-youtube"></i></a>
              <a href="https://www.facebook.com/profile.php?id=100063950416157" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/mauli_construction2020?igsh=MWZmdHIxdTU1YXZxaQ==" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></a>
              <a href="https://wa.me/message/RWXXVUCIVYVII1" className="d-flex align-items-center justify-content-center"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </div>

       
        <div className="col-lg-3 col-md-6 footer-links">
          <br /><h4>Useful Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><a href="/about">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li className="nav-item">
                <NavLink to="/dashboard/admin/product_dummy" className="nav-link">
                  Projects
                </NavLink>
            </li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-3 footer-links">
        <br />
            <h4>Our Services</h4>
            <ul>
              <li>Construction Consultancy</li>
              <li>Planning</li>
              <li>RCC Design and Supervision</li>
              <li>Estimation & Valuation</li>
              <li>3D Elevations</li>
              <li>Many more...</li>
            </ul>
          </div>

        
      </div>
    </div>
  </div>

  <div className="footer-legal  position-relative">
    <div className="container">
      <div className="copyright"><center>
        &copy; Copyright <strong><span>Mauli Construction</span></strong>. All Rights Reserved
        </center></div>
      
    </div>
  </div>

</footer>

  )
}

export default Footer