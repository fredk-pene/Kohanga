import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useCacheUser } from './auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

// import Nav from './subcomponents/Nav - good for sign in stuff'
import Home from './views/Home'
import Challenge from './views/Challenge'
import PropertyDetails from './views/PropertyDetails'
import AdminLogin from './views/AdminLogin'
import { getUser } from './api'
import { useDispatch } from 'react-redux'
import { clearLoggedInUser, updateLoggedInUser } from './slices/user'
import ReportSubmit from './views/ReportSubmit'

function App() {
  useCacheUser()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(clearLoggedInUser())
    } else {
      getAccessTokenSilently()
        .then((token) => getUser(token))
        .then((userInDb) => {
          userInDb
            ? dispatch(updateLoggedInUser(userInDb))
            : navigate('/register')
        })
        .catch((err) => console.error(err))
    }
  }, [isAuthenticated])

  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/submit/" element={<ReportSubmit />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="login" element={<AdminLogin />} />
      </Routes>
    </>
  )
}

export default App
