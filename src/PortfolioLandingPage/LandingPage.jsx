import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Skills from '../components/Skills'
import ContactDetails from '../components/ContactDetails'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
     <Home/>
      <Skills/>  
      <ContactDetails/>
    </div>
  )
}

export default LandingPage
