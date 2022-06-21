import React from 'react'
import './Header.css'

export default function Header() {
    return (
      
    <header className="center">
      <nav>
        <div className="logo-wrapper">
          <img className="logo" src={'images/logo.png'} alt="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li><a href="index.html">HOME</a></li>
            <li><a href="index.html">BIKES</a></li>
            <li><a href="index.html">GEAR</a></li>
            <li><a href="index.html">PARTS</a></li>
            <li><a href="index.html">TIRES</a></li>
            <li><a href="index.html">SERVICE INFO</a></li>
            <li><a href="index.html">CATALOGUES</a></li>
            <li><a href="index.html">CONTACT</a></li>
          </ul>
        </div>
        <div className="icon-box">
          <p className="nav-icons"><i className="fas fa-search"></i></p>
          <p className="nav-icons"><i className="fas fa-lock"></i></p>
        </div>
      </nav>
      <div className="title-wrapper">
        <h1 className="title">Bikes</h1>
      </div>
    </header> 
    )
}
