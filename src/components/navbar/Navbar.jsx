import React from "react";
import "./navbar.scss";
import { Icon } from "react-icons-kit";
import { useState } from "react";
import { x } from "react-icons-kit/feather/x";
import { menu } from "react-icons-kit/feather/menu";

const Bar = (props) => {
  return (
    <li>
      <a href={props.name}>{props.value}</a>
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  let menu_Items = [
    { id: 1, menu: "Home", name: "#home" },
    { id: 2, menu: "Pages", name: "#pages" },
    { id: 3, menu: "Contact Us", name: "#contact" },
    { id: 4, menu: "Blog", name: "#blog" },
    { id: 5, menu: "Landing", name: "#landing" },
  ];
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);

  };
  return (
    <>
      <div className="Restaurant--navbar">
        <h3 className="Restaurant--navbar__logo">Gerícht</h3>
        <ul className="Restaurant--navbar__list">
          {menu_Items.map((item) => (
            <Bar key={item.id} value={item.menu} name={item.name} />
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
      <div
        className={toggleMenu ? "expanded" : "Restaurant--navbar__MobileMenu"}
      >
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
};

export default Navbar;
// "Restaurant--navbar__MobileMenu"
