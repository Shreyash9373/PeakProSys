import React from 'react'
import Header from '../components/Header.jsx'
import Services from '../components/Services.jsx'
import Accordion from '../components/Accordion.jsx'
import Footer from '../components/Footer.jsx'
import ContactInformation from '../components/ContactInformation.jsx'

const Home = () => {
  return (
    <div className='mx-10'>
     <Header/>
     <Services/>
     <Accordion/>
     <ContactInformation/>
     
    </div>
  )
}

export default Home
