import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className='sec-footer'>
      <div className='foot-brand'>
        <h1 className='foot-title'>BrandName</h1>
        <div className='foot-icons'>
          <i class='foot-ic fab fa-facebook'></i>
          <i class='foot-ic fab fa-instagram'></i>
          <i class='foot-ic fab fa-twitter'></i>
        </div>
      </div>
      <div className="foot-mess">
      <div className='foot-ancer'>
        <a className='ancers head-foot' href='#'>Company Info</a>
        <a className='ancers head-foot' href='#'>Legal</a>
        <a className='ancers head-foot' href='#'>Features</a>
        <a className='ancers head-foot' href='#'>Resources</a>
        <a className='ancers' href='#'>About Us</a>
        <a className='ancers' href='#'>About Us</a>
        <a className='ancers' href='#'>Business Marketing</a>
        <a className='ancers' href='#'>IOS and Android</a>
        <a className='ancers' href='#'>Carrier</a>
        <a className='ancers' href='#'>Carrier</a>
        <a className='ancers' href='#'>User Analytic</a>
        <a className='ancers' href='#'>Watch a Demo</a>
        <a className='ancers' href='#'>We are hiring</a>
        <a className='ancers' href='#'>We are hiring</a>
        <a className='ancers' href='#'>Live Chat</a>
        <a className='ancers' href='#'>Customers</a>
        <a className='ancers' href='#'>Blog</a>
        <a className='ancers' href='#'>Blog</a>
        <a className='ancers' href='#'>Unlimited Support</a>
        <a className='ancers' href='#'>API</a>
      </div>
      <div className="email-foot">
       <h3 className='email-title'>Get In Touch</h3>
       <div className="inputs">
        <input  className='inpt-email' placeholder='Your Email' type="text" />
        <button className='btn-email' >Subscribe</button>
       </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
