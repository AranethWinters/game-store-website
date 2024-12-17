'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Authentication from './../Authentication.jsx';


function Header(){
  return (
    <div className="container">
      <div className="navbar">
        <nav>
          <ul>
            <li><a href="#"><img src={null}/></a></li>
            <li><a href="/pages/home">Home</a></li>
            <li><a href="/pages/game_placeholder">Our Games</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <Authentication></Authentication>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header