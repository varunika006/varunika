import React from 'react'
import Header from './Components/Header';
import Footer from'./Components/Footer';
import Navbar from './Components/Navbar';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
const App = () => {
  return (
   <>
   {/*<Header/>
   <Footer/>*/}
   <Navbar/>
   <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/about"element={<About/>}/>
  <Route path="/contact"element={<Contact/>}/>
  <Route path="/service"element={<Service/>}/>
   </Routes>
   </>
  )
}

export default App