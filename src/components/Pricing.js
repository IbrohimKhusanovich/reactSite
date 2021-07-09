import React from 'react'
import './Pricing.css'
import {pricing} from './json'
function Pricing() {
 return (
  <div className='sec-pricing'>
<h1 className='pricing-title'>Pricing</h1>
<p className='pricing-text'>Problems trying to resolve the conflict between <br />
the two major realms of Classical physics: Newtonian mechanics </p>
<div className="cards">
{
  pricing.map(function(item,i){
return(
  <div className="card">
    <h3 className='card-title'>{item.title}</h3>
    <p classNam='card-text'>Organize across all <br /> apps by hand</p>
    <h1 className='card-price'>{item.price}</h1>
    <p className='per-month'>Per Month</p>
    <button className='card-btn'>Try for free</button>
    <ul className='checks'>
      <li className='checked'>Unlimited product updates</li>
      <li className='checked'>Unlimited product updates</li>
      <li className='checked'>Unlimited product updates</li>
      <li className='no-checked'>1GB  Cloud storage</li>
      <li className='no-checked'>Email and community support</li>
    </ul>
  </div>
)
  })
}
  </div>
  </div>
 )
}

export default Pricing
