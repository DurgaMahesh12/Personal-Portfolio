import React from 'react'
import LandingPage from './PortfolioLandingPage/LandingPage'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import ContactDetails from './components/ContactDetails'
import Projects from './PortfolioLandingPage/ProjectLandingpage'



const App = () => {
  return (
    <div>
     <Routes>
     <Route path='/' element={<LandingPage/>}></Route>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/skills' element={<Skills/>}></Route>
     <Route path='/projects' element={<Projects/>}></Route>
     <Route path='/contact' element={<ContactDetails/>}></Route>
     </Routes>
    </div>
  )
}

export default App
