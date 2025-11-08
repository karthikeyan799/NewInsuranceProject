import React, { useContext } from 'react'
// import './Login.css'
import './Navbar.css'
import logo from '../assets/logo.png'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
export default function Navbar() {
  // const menuOpenButton = document.getElementById("#menu-open-button");

  // menuOpenButton.addEventListener("click", () => {
  //     document.body.classList.toggle('show-mobile-menu');

  // });
  // const isLoggedIn =false;
  useEffect(() => {
    const menuOpenButton = document.getElementById("menu-open-button"); // no '#'
    const menuClose = document.getElementById("menu-close-button");

    const toggleMenu = () => {
      document.body.classList.toggle('show-mobile-menu');
    };
    
    if (menuOpenButton) {
      menuOpenButton.addEventListener("click", toggleMenu
        //         () => {
        // navmenu.classList.add()}
      );
    }
    if (menuClose) {
      menuClose.addEventListener("click", toggleMenu);
    }

    // Cleanup to remove event listener when component unmounts
    return () => {
      if (menuOpenButton) {
        menuOpenButton.removeEventListener("click", toggleMenu);
      }
      if (menuClose) {
        menuClose.addEventListener("click", toggleMenu);

      }
    };
  }, []);
  const { user, logout, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  }
  return (
    <nav className='navbar navbar-expand-sm bg-dark drk'>

      <div className='container inavbar'>

        <ul className='nav '>

          {/* <li> <img style={{ backgroundImage: `url(${logo})` }} className="logo" alt="" /></li> */}
          <li>
            <h4 className='text-white'>Insurance</h4>

          </li>
          {/* <img style={{ backgroundImage: `url(${logo})` }} className="logo" alt="" /> */}

        </ul>

        <ul className='nav menu'>
          {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i className='fa fa-times'></i></span>
            </button>  */}
          {/* <button id='menu-close-button' className='fa fa-times p-3'></button> */}
          <li className='nav-item'>
            <Link className='nav-link' to={"/"}>Home</Link>
          </li>

          {!isLoggedIn ?
            (<>
              <li className='nav-item'>
                <Link to={"/login"} className='nav-link'>Login</Link>
              </li> <li className='nav-item'>
                  <Link className='nav-link' to={"/dashboard"}>Dashboard</Link>
                </li></>
            ) :
            (
              <ul className='nav menu'>
                <li className='nav-item'>
                  <Link className='nav-link' to={"/dashboard"}>Dashboard</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={"/rightJoin"}>Right Join</Link>
                </li>
                < li className='nav-item'>
                  <Link className='nav-link' to={"/policy"}>Policy</Link>
                </li>
                <li className='nav-item'>
                  <Link to={"/customer"} className='nav-link'>Customer</Link>
                </li>


                <li className='nav-item'>
                  <Link to={""} className='nav-link'>Profile</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={""} onClick={handleLogout}>LogOut</Link>
                </li>
              </ul>
            )}
        </ul>

        <button id='menu-open-button' className='fa fa-bars p-3'></button>
      </div >
    </nav >
  )
}
