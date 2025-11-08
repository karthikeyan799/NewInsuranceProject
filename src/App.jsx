import { Children, useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Body/Login'
import FetchById from './Policy/fetchById'
import FetchAllPolicy from './Policy/FindAllPolicy'
import Home from './Body/Home'
import Navbar from './Body/Navbar'
import CustomerDashboard from './CustomerDashboard'
import Dashboard from './Body/Dashboard'
import Update from './Customer/Update'
import Delete from './Customer/Delete'
import Fetch from './Customer/Fetch'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Search from './Body/Search'
import Add from './Customer/Add'
import AddPolicy from './Policy/AddPolicy'
import PolicyDashboard from './Policy/PolicyDashboard'
import UpdatePolicy from './Policy/UpdatePolicy'
import Footer from './Body/Footer'
import FetchAll from './Customer/FetchAll'
import PageNotFound from './Body/PageNotFound'
import AuthProvider, { AuthContext } from './Body/AuthProvider'
import RightJoin from './Customer/RightJoin'
import Register from './Body/Register'



function App() {
  const RequireAuth = ({ children }) => {
    const { user } = useContext(AuthContext);
    //

    return user ? children : <Navigate to={"/"} />
    // return user;
  }

  return (
    <div>

      <AuthProvider >
        <BrowserRouter>
          {/* <RequireAuth> no */}
          <Navbar />
          {/* </RequireAuth> */}
          <Routes>

            <Route exact path='/' element={
              // <RequireAuth> no
              <Home />
              // </RequireAuth>
            } />
            <Route path="/dashboard" element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            } />
            <Route path='/rightJoin' element={
              <RequireAuth>
                <RightJoin />
              </RequireAuth>} />
            <Route path='/login' element={
              // <RequireAuth> no
              <Login />
              // </RequireAuth>
            } />
            <Route path='/registration' element={<Register />}></Route>

            <Route path='/search' element={
              // <RequireAuth> no
              <Search />
              // </RequireAuth>
            } />

            <Route path='/policy' element={
              <RequireAuth>
                <PolicyDashboard />
              </RequireAuth>

            }>
              {/* crud */}
              <Route path='fetchById' element={
                // <RequireAuth> no
                <FetchById />
                // </RequireAuth>
              } />
              <Route exact path='' element={
                // <RequireAuth> no

                <AddPolicy />
                // {/* </RequireAuth> */}
              } />
              <Route path='update' element={
                // <RequireAuth> no

                <UpdatePolicy />
                // </RequireAuth>
              } />
              <Route path='fetchAllPolicy' element={
                // <RequireAuth> no

                <FetchAllPolicy />
                // {/* </RequireAuth> */}
              } />
            </Route>

            <Route path='/customer' element={
              <RequireAuth>
                <CustomerDashboard />
              </RequireAuth>} >

              <Route path='' element={<Add />} />
              <Route path='update' element={
                // <RequireAuth> no
                <Update />
                // {/* </RequireAuth> */}
              } />
              <Route path='fetchAll' element={
                // <RequireAuth> no
                <FetchAll />
                // {/* </RequireAuth> */}
              } />
              <Route path='delete' element={
                // <RequireAuth> no
                <Delete />
                // {/* </RequireAuth> */}
              } />
              <Route path='fetch' element={
                // <RequireAuth> no
                <Fetch />
                // </RequireAuth>
              } />

            </Route>
            <Route path='*' element={
              // <RequireAuth> no
              <PageNotFound />
              // </RequireAuth>
            } />

            <Route path='/footer' element={
              // <RequireAuth> no
              <Footer />
              // </RequireAuth>
            } />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <Footer />
    </div>
  )
}

export default App
