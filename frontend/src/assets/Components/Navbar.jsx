import React from 'react'
import'/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='Navbar'>
                <li><linl to="/">Home</linl></li>
                <li><link to="/about">About</link></li>
                <li><link to="/contact">Contact</link></li>
                <li><link to="/service">Service</link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar