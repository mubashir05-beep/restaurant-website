import React from 'react'
import './gallery.scss'
import spoon from '../../assets/spoon.png';
import img1 from "../../assets/gallery01.png";
import img2 from "../../assets/gallery02.png";
import img3 from "../../assets/gallery03.png";
import img4 from "../../assets/gallery04.png";
import { ImgContainer } from '../../containers/export'

const Gallery = () => {
  return (
    <div className="Restaurant--InstagramSection__container">
      <div className="Restaurant--InstagramSection__LeftSection">
        <div className="insta">
          <h5>Instagram</h5>
          <img src={spoon} alt="" srcset="" />
        </div>
        <h1>Photo Gallery</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          aspernatur dolore iste a ab? Molestiae maxime alias nemo ad placeat
          sapiente eaque, recusandae quod non tempora nulla provident nihil
          perspiciatis consectetur. Quo, ipsum?
        </p>
        <button>View More</button>
      </div>

      <div className="Restaurant--InstagramSection__RightSection">
        <ImgContainer photo={img1} />
        <ImgContainer photo={img2} />
        <ImgContainer photo={img3} />
        <ImgContainer photo={img4} />
      </div>
    </div>
  );
}

export default Gallery