import React from 'react'
import './recipes.scss';
const Recipes = (props)=> {
  return (
    <div className="Recipes--Container">
      <div className="Recipes__topSection">
        <div className="name">{props.Name}</div>
        <div className="line"></div>
        <div className="price">{props.Price}</div>
      </div>
      <div className="ingredients">{props.desc}</div>
    </div>
  );
}

export default Recipes