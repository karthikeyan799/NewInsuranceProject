import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'

export default function Dashboard() {
  const {error,isLoggedIn}=useContext(AuthContext)
  return (
    <div className='container'>
        <div>
          {isLoggedIn ?(
            <h2>{error.userName}</h2>
            ):""}
        </div>
        <div><h1>welcome</h1></div>
    </div>
  )
}
