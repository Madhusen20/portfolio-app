import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experiences from './components/Experiences'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Aos from 'aos';
import"aos/dist/aos.css"


const App = () => {
  useEffect(() => {
  Aos.init();
  }, [])
  return (
   <>
   <div className='container'>
   <Navbar/>
   <Home/>
   <Experiences/>
   <Skills/>
   <Projects/>
    <Contact/>
   </div>

   </>
  )
}

export default App
 

