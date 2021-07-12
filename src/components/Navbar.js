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
   <div className="media-nav">
   <i class="fas fa-search"></i>
   <i class="fas fa-shopping-cart"></i>
   <i class="fas fa-bars" onClick={function menuBars(){ document.querySelector('.panel').classList.toggle('d-none')}}></i>
   </div>
  </header>
 )
}


export default Navbar
