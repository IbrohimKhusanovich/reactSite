import React from 'react'
import './About.css'
import icon from '../img/icn settings .icn-md.png'
import icon2 from '../img/icn settings .icn-md (1).png'
import videoImg from '../img/video.1 (1).jpg'
import videoPlay from '../img/Vector (6).png'
function About() {
 return (
  <div className='sec-about'>
   <h1 className='about-title'>About Us</h1>
   <p className='about-text'>Problems trying to resolve the conflict between <br />
the two major realms of Classical physics: Newtonian mechanics </p>
<div className="about-content">
 <div className="img-box">
  <img className='video-img' src={videoImg} alt="img" />
<img className='play' src={videoPlay} alt="play" />
 </div>
 <div className="about-texts">
  <h3 className='max-text'>Most trusted in our field</h3>
  <p className='min-text'>Most calendars are designed for teams. Slate
is designed for freelancers who want a
simple way to plan their schedule.</p>
<p className='icons'>the quick fox jumps over the lazy
dog</p>
<p className='icons2'>the quick fox jumps over the lazy
dog</p>
 </div>
</div>
  </div>
 )
}

export default About
