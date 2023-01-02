import React from 'react'
import './findUs.scss'
import spoon from '../../assets/spoon.png'
import find from '../../assets/findus.png'
const FindUs = () => {
  return (
    <div className="Restranant--FindUs__container" id='contact'>
      <div className="LeftSection">
        <div className="contactHead">
          <h5>Contact</h5>
          <img src={spoon} alt="" />
        </div>
        <h1>Find Us</h1>
        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <div className="openingHours">
          <h5>Opening Hours</h5>
          <p>Mon-Fri: 10:00 am - 02:00 am</p>
          <p>Sar-Sun: 10:00 am - 03:00 am</p>
        </div>
        <button>Vist Us</button>
      </div>
      <div className="RightSection">
    <img src={find} alt="" srcset="" />
      </div>
    </div>

  );
}

export default FindUs