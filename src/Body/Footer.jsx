import React from 'react'
import './Footer.css'
export default function Footer() {
  const longitute="13.050907843983111";
  const letitute="80.19389901044687";
  return (
    <div className='container-fluid bg-white text-black py5 '>
      <div className='container d-flex we'>
        <div className='col-3'>
          <div className=''>
            <h1>Address</h1>
            <p> 21-20, Ratna Nagar Main Rd, Phase 1, Swarnambigai Nagar, Virugambakkam, Chennai, Tamil Nadu 600092</p>
          </div>
          <h4>Follow Us on</h4>
          <ul className='nav gap-3'>
            <li className='nav-item' ><a href="#"><i className='bi bi-youtube'></i></a></li>
            <li className='nav-item'><a href="#"><i className='bi bi-facebook'></i></a></li>
            <li className='nav-item'><a href="#"><i className='bi bi-instagram'></i></a></li>
            <li className='nav-item'><a href="#"><i className='bi bi-linkedin'></i></a></li>
          </ul>
        </div>
        <div className='col'>
          <h2>Company</h2>
          <ul className='nav'>
            <li className='nav-item'>About Us</li>
            <li className='nav-item'>Careers</li>
            <li className='nav-item'>Employee home</li>

          </ul>
        </div>
        <div className='col'>
          <h2>Support</h2>
          <ul className='nav'>
            <li className='nav-item'>Contact Us</li>
            <li className='nav-item'>Site Map</li>
            <li className='nav-item'>Terms & conditions</li>
          </ul>
        </div>
        <div className='col'>
          <h2>Policies</h2>
          <ul className='nav'>
            <li className='nav-item'>General Insurance</li>
            <li className='nav-item'>Life Insurance</li>
            <li className='nav-item'>Term Insurance</li>
            <li className='nav-item'>Investment</li>
          </ul>
          {/* <div style={{ width: "300px", height: "300px", backgroundColor: "" }}>
          
            <iframe src='www.https://www.google.com/maps/?q=${longitute}' frameborder="0"></iframe>
          </div> */}
        </div>
      </div>
      <hr />
      <div className='container d-flex foot'>
        <div className='d-flex' >
          <p>Copyright &copy; 2025. All Rights  Reserved</p>
        </div>
        <div className='d-flex'>
          <p>Our businesses</p>
          <div className='slider'>
            <div className='nav infinite'>
              <span className='nav-item'><img src="" alt="" />a</span>
              <span className='nav-item'><img src="" alt="" />b</span>
              <span className='nav-item'><img src="" alt="" />c</span>
              <span className='nav-item'><img src="" alt="" />d</span>
              <span className='nav-item'><img src="" alt="" />e</span>
              <span className='nav-item'><img src="" alt="" />f</span>
              <span className='nav-item'><img src="" alt="" />g</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
