import React from 'react'
import './Busniess.css'
import logo from '../img/icn.resize.icn-xl.png'
import {busniess} from './json'
function Busniess() {
 return (
  <section className='sec-busnies'>
<h1 className='sec2-title'>Better Strategy With
Quality Business</h1>
<p className='sec2-text'>Problems trying to resolve the conflict between <br />
the two major realms of Classical physics: Newtonian mechanics </p>
<div className="business-f">

{busniess.map(function(item,i){
 return(
<div className='business'>
<img className='img1' src={logo} alt="img" />
<div className="bus">
<h3 className='bus-title'>{item.title}</h3>
<p className='bus-text'>{item.text}</p>
</div>
</div>)
})}
</div>
  </section>
 )
}

export default Busniess
