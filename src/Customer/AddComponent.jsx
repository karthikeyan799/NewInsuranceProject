import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

export default function AddComponent() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
            <div style={{ width: "20%", padding: "20px", background: "#f4f4f4" }}>
                <h2>CRUD Actions</h2>
                <ul style={{ listStyleType: "none", padding: 0 }}>
  {/* <li><Link to="add"><button style={buttonStyle}>Add</button></Link></li> */}
  <li><a href="/dashboard"><button>Add</button></a></li>
                    {/* <li><Link to="update"><button style={buttonStyle}>Update</button></Link></li>
                    <li><Link to="delete"><button style={buttonStyle}>Delete</button></Link></li>
                    <li><Link to="fetch"><button style={buttonStyle}>Fetch</button></Link></li> */}

                </ul>
               
                </div>
                <div style={{ flex: 1, padding: "20px" }}>
                {/* <Routes>
                    <Route path="add" element={<AddComponent />} />
                    <Route path="update" element={<Update />} />
                    <Route path="delete" element={<Delete />} />
                    <Route path="fetch" element={<Fetch />} />
                </Routes> */}
            </div>
            </div>
  )
}
