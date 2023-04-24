import React from 'react'
import "../App.css"
function Header() {
  return (
    <div className='header'>
        <div className='header-left'><h4>Chinmay Chaudhari</h4></div>
        <div className='header-right'>
        <a href="#intro" className='a'><h5 className='header-h3'>About</h5></a>
        <a href="#projects" className='a'><h5 className='header-h3'>Projects</h5></a>
        <a href="#contact" className='a'><h5 className='header-h3'>Contact</h5></a>
        </div>
    </div>
  )
}

export default Header
