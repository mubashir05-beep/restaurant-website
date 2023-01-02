import React from 'react';
import "./imgContainer.scss";
import logo from '../../assets/pngfind.com-instagram-png-23339.png';
const ImgContainer = (props) => {
  return (
    <div className="Insta--ImgContainer">
      <div className="photo">
        <img src={props.photo} alt="" srcset="" />
      </div>
      <div className="logo">
        <img src={logo} alt="" srcset="" />
      </div>
    </div>
  );
}

export default ImgContainer