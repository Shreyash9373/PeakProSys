import React from 'react'
import Header from '../components/Header.jsx'
import Services from '../components/Services.jsx'
import Accordion from '../components/Accordion.jsx'
import Footer from '../components/Footer.jsx'
import ContactInformation from '../components/ContactInformation.jsx'

const Home = () => {
  return (
    <div>
     <Header/>
     <Services/>
     <Accordion/>
     <ContactInformation/>
     <Footer/>
     <Services/>
     <Accordion/>
     <ContactInformation/>
     <Footer/>
    </div>
  )
}

export default Home
