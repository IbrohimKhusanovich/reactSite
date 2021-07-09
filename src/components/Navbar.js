import React from 'react'
import './Navbar.css'
function Navbar() {
 return (
  <header>
   <h2 className='logo'>BrandName</h2>
   <ul className='panel'>
<li className='panel-item'><a href="#">Home</a></li>
<li className='panel-item'><a href="#">Product</a></li>
<li className='panel-item'><a href="#">Pricing</a></li>
<li className='panel-item'><a href="#">Contact</a></li>
   </ul>
   <div className="buttons">
   <a href="" className='login'>Login</a>
   <button className='nav-btn'>Become a member <i class="fas fa-long-arrow-alt-right"></i></button>
   </div>

  </header>
 )
}

export default Navbar
