import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Footer from './components/Footer'
import Shops from './pages/Shops'
import Shop from './pages/Shop'
import MakeReservation from './pages/MakeReservation'
import ReservationDetail from './pages/ReservationDetail'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shops' element={<Shops />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shop/:shopId' element={<Shop />} />
        <Route path='/shop/:shopId/make-reservation' element={<MakeReservation />} />
        <Route path='/employee/:employeeId' element={<ReservationDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App