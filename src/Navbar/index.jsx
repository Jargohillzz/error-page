import "./navbar.style.css";
//import menu from '../../pages/ComingSoon/images/menu.svg'
import React, { useRef } from "react";
import logo from "./assets/icon.png";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  const handleToggle = () => {
    console.log(navRef.current);
    navRef.current.classList.toggle("show-links");
  };

  const links = [
    {
      id: 1,
      url: "/",
      text: "home",
    },
    {
      id: 2,
      url: "/",
      text: "browse templates",
    },
    {
      id: 3,
      url: "/",
      text: "pricing",
    },
    {
      id: 4,
      url: "/",
      text: "blog",
    },
    {
      id: 5,
      url: "/",
      text: "FAQs",
    },
  ];

  return (
    <div className="navbar">
      <div className="nav-header-container">
        <div className="nav-header container">
          <div className="nav-logo">
            <h2>
              Cert<span>awi</span>
            </h2>
            <img src={logo} alt="certawi bulb" />
          </div>
          <div className="nav-click">
            <button className="btn">get started</button>
            <FaBars className="bars" onClick={handleToggle} />
          </div>
        </div>
      </div>
      <div className="nav-links">
        <div className="links-container container" ref={navRef}>
          <div className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <p key={id}>
                  <a href={url} className="link">
                    {text}
                  </a>
                </p>
              );
            })}
          </div>
          <div className="button-container">
            <button className="btn">get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
