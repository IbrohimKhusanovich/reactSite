import React from 'react'
import './GetTouch.css'
import {getTouch} from './json'
function GetTouch() {
 return (
  <div className='sec-touch'>
<h1 className='touch-title'>Get In Touch</h1>
<p className='touch-text'>Problems trying to resolve
the conflict between the two major
realms of Classical physics:
Newtonian mechanics </p>
<div className="messages">
 {getTouch.map(function(item,i){
return<div className="touch-card">
 <i className={item.icon}></i>
 <p className='tcard-email'>georgia.young@example.com</p>
 <p className='tcard-email'>georgia.young@ple.com</p>
 <h3 className='tcard-text'>Get Support</h3>
 <button className='touch-btn3'>Submit Request</button>
 </div>
 })}
</div>
  </div>
 )
}

export default GetTouch
