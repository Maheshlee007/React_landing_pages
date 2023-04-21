import React, { useState } from "react";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div
        className="app__navbar-logo"
        onMouseMove={() => {
          if (window.innerWidth < 650) {
            settoggle(!toggle);
          }
        }}
      >
        <img src={images.gericht} alt="" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p_opensans">
          Login /
        </a>

        <a href="#register" className="p_opensans">
          Register |
        </a>
        <a href="#register" className="p_opensans">
          Book Table
        </a>
      </div>
      <div className="app__nanvbar-smallscreen">
        {/* <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => settoggle(!toggle)}
        ></GiHamburgerMenu> */}
        {toggle && (
          <div className="app__navbar-smallscreen_overlay ">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay"
              onClick={() => settoggle(!toggle)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="contact">Contact</a>
              </li>
            </ul>
            <div className="app__navbar-login" style={{ color: "white" }}>
              <a href="#login" className="p_opensans">
                Login /
              </a>

              <a href="#register" className="p_opensans">
                Register |
              </a>
              <a href="#register" className="p_opensans">
                Book Table
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
