import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import "../App.css"


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-title'>Connect Me</div>
        <div className='icons'>
        <FaFacebook className='icon'/>
        <FaInstagram className='icon'/>
        <FaLinkedin className='icon'/>
        </div>

    </div>
  )
}

export default Footer