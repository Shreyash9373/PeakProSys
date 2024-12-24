import React from 'react'
import Header from '../components/Header'
import Services from '../components/Services'
import Accordion from '../components/Accordion'
import ContactInformation from '../components/ContactInformation'


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
