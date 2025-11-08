import React, { useContext } from 'react'
import './Home.css'

import hospitalImage from '../assets/360.jpg'
import { AuthContext } from './AuthProvider'
// import  '../Body/Home.css'
export default function Home() {
  const {user,isLoggedIn} = useContext(AuthContext);
  return (
    <div className='container-fluid policyImg'>
      <div className='container mt-3 d-flex'>
        <div className='col-6'>
          {/* {!isLoggedIn ?( */}
          {/* <h1>{user.username} Welcome </h1> */}
          {/* ):""} */}
        </div>
        <div className='quates col-6 '>
          <span className=''> A Life Full of Care</span>
          <h1>Assurena Helps You protect Your Family</h1>
          <p>We are an independent insurance brokerage agency in the IN. We represent more than 20 top local & national insurance carriers</p>
          <button>Get Started </button>
        </div>
        {/* <div className=''>

        </div> */}
      </div>
      <div className='container  box'>
        <div className='col' style={{  borderRadius: "5px", 
          backgroundColor: "white" }}>
          <div>
            <span><i></i></span>
          </div>
          <div>
            <h1>Peace Of Mind</h1>
          </div>
        </div>
        <div className='col' style={{  borderRadius: "5px",
           backgroundColor: "white" }}>
          <div>
            <span><i></i></span>
          </div>
          <div>
            <h1>Peace Of Mind</h1>
          </div>
        </div>
        <div className='col' style={{  borderRadius: "5px",
           backgroundColor: "white" }}>
          <div>
            <span><i></i></span>
          </div>
          <div>
            <h1>Peace Of Mind</h1>
          </div>
        </div>
      </div>
      <div className='container d-flex'>
        <div className='col-6'>
          {/* <img src="" alt="" /> */}
        </div>
        <div className='content col-6'>
          <h2 className='text-white'>"THE BEST TIME TO BUY LIFE INSURANCE WAS YESTERDAY, THE NEXT BEST TIME IS TODAY."</h2>
          <button>Get Started...</button>
        </div>
      </div>
      <div className='container d-flex mb-4'>
        <div className='content col-6'>
          <h2 className='text-white'>"THE BEST TIME TO BUY LIFE INSURANCE WAS YESTERDAY, THE NEXT BEST TIME IS TODAY."</h2>
          <button>Get Started...</button>
        </div>
        <div className='col-6'>
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    </div>
  )
}
