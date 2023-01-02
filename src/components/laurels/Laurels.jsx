import React, { useRef } from 'react'
import { useEffect } from 'react';
import './laurels.scss'
import meal from '../../assets/meal.mp4'
import cheffsign from "../../assets/sign.png";
const Laurels = () => {
    const vidRef = useRef();
    useEffect(() => {
      vidRef.current.play();
    }, []);

  return (
    <div className="Restaurant__Laurels--container" id='landing'>
      <video src={meal} ref={vidRef} muted autoPlay loop />
      <div className="Restaurant__Laurels--upperSection">
        <h1>Our Values</h1>
        <p className="Desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum
          voluptate dolor assumenda soluta neque ipsam labore iure repudiandae
          maxime sed nihil quo est, exercitationem ullam. Quod iure neque
          dignissimos quo amet repellat veritatis et blanditiis repudiandae!
          Quod error doloribus et recusandae sed, repellat modi magni quaerat
          veniam corrupti minus tempora nemo excepturi iste praesentium
          exercitationem ex quibusdam at eligendi sunt quos nihil! Temporibus
          asperiores sequi quam quidem possimus atque?Quod error doloribus et
          minus tempora nemo excepturi iste praesentium exercitationem ex
          quibusdam at Quod error doloribus et recusandae sed, repellat modi
          magni quaerat veniam corrupti minus tempora nemo excepturi iste
          praesentium exercitationem ex quibusdam at eligendi sunt quos nihil!
          Temporibus asperiores sequi quam quidem possimus atque?
        </p>
        <img src={cheffsign} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Laurels