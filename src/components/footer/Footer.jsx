import React from 'react'
import './footer.scss'
import logo from "../../assets/gericht.png";
import spoon from '../../assets/spoon.png'
const Footer = () => {
  return (
    <div className="Restranant--Footer__container">
      <div className="Newsletter-upperSection">
        <div className="spoonContainer">
          <p>Newsletter</p>
          <img src={spoon} alt="" srcset="" />
        </div>
        <h1>Subscribe To Our Newsletter</h1>
        <p>And never miss latest Updates!</p>
        <div className="subscribe">
          <input type="text" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="Newsletter-downSection">
        <div className="left">
          <h4>Contact Us</h4>
          <div className="address">
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <p>+ 1 212-344-1230</p>
            <p>+ 1 212-555-1230</p>
          </div>
        </div>
        <div className="center">
          <img src={logo} alt="" srcset="" />
          <div className="address">
            <p>
              "The best way to find yourself is to lose yourself in the <br/> service
              of others.”
            </p>
            <div className="ll">
 <img src={spoon} alt="" srcset="" />
            </div>
           
          </div>
        </div>
        <div className="right">
          <h4>Working Hours</h4>
          <div className="address">
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <div className="section">
              <p>Monday-Friday</p>
              <p>08:00 am - 12:00 pm</p>
            </div>

            <div className="section">
              <p>Saturday-Sunday</p>
              <p>07:00 am - 11:00 pm</p>
            </div>
          </div>
        </div>
      </div>
      <p>2021 Gerícht. All Rights reserved.</p>
    </div>
  );
}

export default Footer