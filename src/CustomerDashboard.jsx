import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
// import AddComponent from
import Update from './Customer/Update'
import Delete from './Customer/Delete'
import Fetch from './Customer/Fetch'
import Navbar from './Body/Navbar'
import { AuthContext } from './Body/AuthProvider'
export default function CustomerDashboard() {
    return (

        <div style={{ display: "flex", height: "100vh" }}>

            <div style={{
                width: "15%", padding: "10px",
                // background: "#f4f4f4"
                background: "green"
            }}>
                <h2 className='text-center '>CUSTOMER</h2>
                <ul style={{ listStyleType: "none", padding: '0', lineHeight: "70px" }}>
                    <li ><Link to="/customer"><button className='btn btn-light' style={{ width: '100%' }} >Add </button></Link></li>
                    <li><Link to="/customer/update"><button className='btn btn-light' style={{ width: '100%' }}>Update</button></Link></li>
                    <li><Link to="/customer/fetch"><button className='btn btn-light' style={{ width: '100%' }}>Fetch</button></Link></li>
                    <li><Link to="/customer/fetchAll"><button className='btn btn-light' style={{ width: '100%' }}>FetchAll</button></Link></li>
                </ul>
            </div>


            <div style={{ flex: 1, padding: "20px" }}className='policyImg'>

                <Outlet />
            </div>
        </div >
    )
}
