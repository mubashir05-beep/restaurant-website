import React from 'react'
import './chefintro.scss'
import cheffPNG from '../../assets/chef.png'

import spoon from '../../assets/spoon.png'
import quotes from '../../assets/quote.png'
import cheffsign from '../../assets/sign.png'
const ChefIntro = () => {
  return (
    <div className="Restaurant--ChefIntro__container">
      <div className="Restaurant--ChefIntro__container--leftSection">
        <img src={cheffPNG} alt="" srcset="" />
      </div>
      <div className="Restaurant--ChefIntro__container--rightSection">
        <div className="rightSection--chefWord">
          <h3 className="words">Chef's Word</h3>
          <img src={spoon} alt="" srcset="" />
        </div>

        <h1 className="rightSection--Heading">What We Believe In</h1>
        <p className="rightSection--Para">
          <img src={quotes} alt="" srcset="" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          consequatur, odio autem quae mollitia quis tempora vitae doloribus
          distinctio rerum iste magnam quidem sapiente quas nostrum possimus quo
          illum eos aliquam similique sed. Autem in blanditiis, officiis
          adipisci, commodi voluptatem facilis, architecto asperiores aliquid
          delectus repellendus possimus fugiat a temporibus.
        </p>
        <div className="rightSection--chefName">
          <div className="names">
            <h3>Kevin Luo</h3>
            <p>Chef & Founder</p>
          </div>

          <img src={cheffsign} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default ChefIntro