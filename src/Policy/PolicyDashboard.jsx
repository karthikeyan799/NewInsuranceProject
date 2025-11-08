import React from 'react'
import './Policy.css'
import { Link, Outlet } from 'react-router-dom'

export default function PolicyDashboard() {
  return (
    <div style={{ display: "flex", height: "100vh" }}  >
      <div style={{ width: '15%',padding:"10px", background: "green"}} >
        <h2 className='text-center'>POLICY</h2>
        <ul style={{ listStyleType: "none", padding: '0', lineHeight:"70px"}}>
          <li> <Link to={"/policy"} ><button className='btn btn-light' style={{ width: '100%' }}>Add Policy</button></Link></li>
          <li> <Link to={"/policy/update"} ><button className='btn btn-light' style={{ width: '100%' }}>Update Policy</button></Link></li>
          <li> <Link to={"/policy/fetchById"} ><button className='btn btn-light' style={{ width: '100%' }}>FetchById</button></Link></li>
          <li> <Link to={"/policy/fetchAllPolicy"} ><button className='btn btn-light' style={{ width: '100%' }}>FetchAll</button></Link></li>
        </ul>
      </div>
      {/* <div className='w-75 bg-light'>
            <div className='outlet'>
            <Outlet></Outlet>
            </div>
        </div> */}
      <div style={{ flex: 1, padding: "20px" }} className='policyImg'>
        <Outlet />
      </div>
    </div>
  )
}
