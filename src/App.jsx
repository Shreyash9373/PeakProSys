import React from 'react'
import Navbar from './components/Navbar.jsx'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Career from './pages/Career.jsx'
import Events from './pages/Events.jsx'
import Workshop from './pages/Workshop.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {
  return (
    <div className='mx-10'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/workshop" element={<Workshop/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </div> 
  )
}

export default App
