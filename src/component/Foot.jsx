import React from 'react'
import './Foot.css';
import image from '../assets/love.jpeg'

const footer = () => {
  return ( 
  <div className='foot'>
      
 
  <div className="aria">
    
<div className="here1">
  <img src={image} alt="" />
  <div className="side">
    <div className="one">
    <h1>Legal</h1>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
    </div>
    <div className="two">
    <h2>connect with us @</h2>
    <div className="social">
      <img src={image} alt="" />
      <img src={image} alt="" />
      <img src={image} alt="" />
      <img src={image} alt="" />
    </div>
    </div>

  </div>
            

        </div>
        
        <div className="here">
            <h1>Product</h1>
            <p>Pricing</p>
            <p>Sale</p> 
            <p>Rent</p>
            <p>Agents</p>
            <p>Companies</p>
            <p>Add property</p>

        </div>
        <div className='here'>
          <h1>Quick Links</h1>
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
            <p>Blog</p>
            <p>Reviews</p>
            <p>Policy of Terms</p>
        </div>
        
        </div>
        <div className='mei'>
          <h1>© 2025 Queenie Real Estate. All rights reserved.</h1>

        </div>
        
 </div>
  )
}

export default footer
