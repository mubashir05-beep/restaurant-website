import React from 'react'
import './aboutus.scss'
import spoon from '../../assets/spoon.png'
import knife from '../../assets/knife.png'
import g from '../../assets/G.png'
const AboutUs = () => {
  return (
    <div className="Restaurant--About__Container" id='pages'>
      <div className="Restaurant--About__Container--LeftSection">
        <div className='LeftSection__HeadSection'>
            <h1>About Us</h1>
            <img src={spoon} alt="" srcset="" />
        </div>
        <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore natus neque placeat dignissimos facere id mollitia quidem, eum atque vitae dolorem illo ratione et fugit!</p>
        <button className="knowBTN">
            Know More
        </button>

      </div>
      <div className="Restaurant--About__Container--CenterSection">
        <img className='G' src={g} alt="" srcset="" />
        <img className='knife' src={knife} alt="" />
      </div>
      <div className="Restaurant--About__Container--RightSection">
          <div className='RightSection__HeadSection'>
            <h1>Our History</h1>
            <img src={spoon} alt="" srcset="" />
        </div>
        <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore natus neque placeat dignissimos facere id mollitia quidem, eum atque vitae dolorem illo ratione et fugit!</p>
        <button className="knowBTN">
            Know More
        </button>

      </div>
    </div>
  );
}

export default AboutUs