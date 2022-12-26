import React from 'react'
import './header.scss'
import headerWelcome from '../../assets/welcome.png'
import spoonPNG from '../../assets/spoon.png'
const Header = () => {
  return (
    <div className="Restaurant--Header__Container">
      <div className="Restaurants-Header__left--Section">
        <div className="Restaurants-Header__left--Section__upper--sub__title">
          <p className="Restaurants-Header__left--Section--sub__tag">
            Chase The New Flavour
          </p>
          <img src={spoonPNG} alt="" srcset="" />
        </div>
        <div className="Restaurants-Header__left--Section__midText">
          <h1 className="midText__heading">
            The Key To <br /> Fine Dining
          </h1>
          <p className="midText__para">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus.
          </p>
        <button className='midText__btn'>Explore Menu</button>
        </div>
      </div>
      <div className="Restaurants-Header__right--Section">
        <img src={headerWelcome} alt="Welcome" srcset="" />
      </div>
      <div className="Restraurants-Header__right--Scroll">
        <div className="scrollBar">
        </div>
      <p className="scrollText"><a href="#">Scroll</a></p>
      </div>

    </div>
  );
}

export default Header