import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>

        <Navbar />

        <div className='p-6'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/Contact' element={<Contact />} />

                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default App
