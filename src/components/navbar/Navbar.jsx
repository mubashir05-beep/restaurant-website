import React from 'react'
import './navbar.scss'
import { Icon } from "react-icons-kit";
import { useState } from 'react'
import { x } from "react-icons-kit/feather/x";
import { menu } from "react-icons-kit/feather/menu";

const Bar= (props)=>{
    return <li>{props.value}</li>
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    let menu_Items = [
      { id: 1, menu: "Home" },
      { id: 2, menu: "Pages" },
      { id: 3, menu: "Contact Us" },
      { id: 4, menu: "Blog" },
      { id: 5, menu: "Landing" },
    ];
    const handleToggle = ()=>{
        setToggleMenu(!toggleMenu);
    }
  return (
    <>
      <div className="Restaurant--navbar">
        <h3 className="Restaurant--navbar__logo">GERICHT</h3>
        <ul className="Restaurant--navbar__list">
          {menu_Items.map((item) => (
            <Bar key={item.id} value={item.menu} />
          ))}
        </ul>
        <div className="Restaurant--navbar__buttons">
          <button className="Restaurant--navbar__button--SignUp">
            Sign Up
          </button>
          <div className="Restaurant--navbar__button--Slash">/</div>
          <button className="Restaurant--navbar__button--SignIn">
            Sign In
          </button>
        </div>
        <div className="Restaurant--navbar__Hamburger" onClick={handleToggle}>
          {toggleMenu ? (
            <Icon icon={menu} size={38} className="iconMenu"></Icon>
          ) : (
            <Icon icon={x} size={38} className="iconMenu"></Icon>
          )}
        </div>
      </div>
      <div className={toggleMenu ? "expanded":"Restaurant--navbar__MobileMenu"}>
        <ul>
          {menu_Items.map((item) => (
            <Bar key={item.id} value={item.menu} />
          ))}
        </ul>
        <div className="Restaurant--navbar__buttons">
          <button className="Restaurant--navbar__button--SignUp">
            Sign Up
          </button>
          <div className="Restaurant--navbar__button--Slash">/</div>
          <button className="Restaurant--navbar__button--SignIn">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar
// "Restaurant--navbar__MobileMenu"