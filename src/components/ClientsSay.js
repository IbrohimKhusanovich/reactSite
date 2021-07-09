import React from 'react'
import img1 from '../img/user.1.png'
import img2 from '../img/user.2.png'
import star from '../img/Vector (4).png'
import nostar from '../img/Vector (5).png'
import './ClientsSay.css'
function ClientsSay() {
 return (
  <div className='sec-client'>
<h2 className='clients-title'>What Clients Say</h2>
<p className='clients-text'>Problems trying to resolve the conflict between <br />
the two major realms of Classical physics: Newtonian mechanics </p>
<div className="clients">
 <div className="client-1">
<img className='client-img' src={img1} alt="client" />
<div className="client-texts">
<h3 className='client-title'>Regina Miles</h3>
<p className='client-job'>Designer</p>
<div className="starts">
<img className='star' src={star} alt="star" />
<img className='star' src={star} alt="star" />
<img className='star' src={star} alt="star" />
<img className='star' src={star} alt="star" />
<img className='star' src={nostar} alt="nostar" />
</div>
<p className='client-text'>This proved to be impossible using
concepts of space and time. Einstein
new view of time first and then</p>
</div>
 </div>
 <div className="client-1">
<img className='client-img' src={img2} alt="client" />
<div className="client-texts">
<h3 className='client-title'>Regina Miles</h3>
<p className='client-job'>Designer</p>
<div className="starts">
<img className='star' src={star} alt="star" />
<img className='star' src={star} alt="star" />
<img className='star' src={star} alt="star" />
<img className='star' src={star} alt="star" />
<img className='star' src={nostar} alt="nostar" />
</div>
<p className='client-text'>This proved to be impossible using
concepts of space and time. Einstein
new view of time first and then</p>
</div>
 </div>
</div>
  </div>
 )
}

export default ClientsSay
