import React from 'react'
import Main from "./components/Main"
import About from "./components/About"
import Navbar from './components/Navbar'
import OverView from './components/OverView'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col overflow-x-hidden'>
      <div className='absolute max-w-screen'>
        <Navbar />
      </div>
      <div className='min-h-screen'>
        <div className='absolute'>
          <Main />
        </div>
        <div className='relative'>
          <About />
        </div>
      </div>
      <div className='flex flex-col relative bg-white'>
        <OverView />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App