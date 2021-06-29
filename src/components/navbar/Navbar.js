import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container flex">
        <h1 className="logo">Loruki.</h1>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="features.html">Features</a></li>
            <li><a href="docs.html">Docs</a></li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Navbar
