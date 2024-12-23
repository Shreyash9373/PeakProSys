import React from 'react'
import Header from '../components/Header'
import Services from '../components/Services'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'
import ContactInformation from '../components/ContactInformation'

const Home = () => {
  return (
    <div>
     <Header/>
     <Services/>
     <Accordion/>
     <ContactInformation/>
     <Footer/>
    </div>
  )
}

export default Home
