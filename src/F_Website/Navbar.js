
// Navbar.js


import React, { useState } from "react";
import "../MYcss/Style.css";
import "../MYcss/Responsive.css";
import { NavLink } from "react-router-dom";
import Image1 from "../Picture/Searchbar.png";
import Image2 from "../Picture/likeeee.png";
import Image3 from "../Picture/Cartaaaa.png";
import Image4 from "../Picture/menu.png";
import Contact from '../components/page/contact'
import About from '../sections/portion/About'
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  function click() {
    setToggle(!toggle);
  }

  function toggleSearchBar() {
    setSearchBar((prevSearchBar) => !prevSearchBar);
  }

  return (
    <div className="Navbar">
      <div className="Navbar_logo">
        <h2>Exclusive</h2>
      </div>

      <div className="Navmenu">
        <ul>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contant</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Sign Up">Sign Up</NavLink>
          </li>
        </ul>
      </div>

      <div className="Navbar_Search">
        {/* <div className={`Navbar_Search_1 ${searchBar ? "Search" : ""}`}>
          <input
            type="text"
            placeholder="What are you looking for?"
            style={{ display: searchBar ? "block" : "none" }}
          />
          <img src={Image1} alt="Image1" onClick={toggleSearchBar}  />
        </div> */}

        <div className="Navbar_Search_2">
          <img src={Image2} alt=""   style={{ display: searchBar ? "none" : "block" }} />
          <img src={Image3} alt=""  style={{ display: searchBar ? "none" : "block" }}  />
          <div className="Mobile_icon" onClick={click}>
            <img src={Image4}  />
          </div>

          <div className={`Navmenu_mobile ${toggle ? "toggle" : ""}`}>
            <ul>
              <li>
                <NavLink className="Navmenu_mobile_Navlink" to="/Home">Home</NavLink>
              </li>
              <li>
                <NavLink className="Navmenu_mobile_Navlink" to="/Contant">Contant</NavLink>
              </li>
              <li>
                <NavLink className="Navmenu_mobile_Navlink" to="/About">About</NavLink>
              </li>
              <li>
                <NavLink className="Navmenu_mobile_Navlink" to="/Sign Up">Sign Up</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
