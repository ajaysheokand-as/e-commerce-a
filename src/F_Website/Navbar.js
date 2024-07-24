
import React, { useState } from "react";
import "../MYcss/Style.css";
import "../MYcss/Responsive.css";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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
        <h2>OM COMPUTER </h2>
      </div>

      <div className="Navmenu">
        <ul>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Sign Up">Sign Up</NavLink>
          </li>
        </ul>
      </div>

      <div className="">
        <div className="Navbar_Search">
          <div className={`Navbar_Search_1 ${searchBar ? "none" : "block"} `} >
            <input
              type="text"
              placeholder="What are you looking for?"
              style={{ display: searchBar ? "block" : "none" }}
            />
            <button style={{ display: searchBar ? "block" : "none" }} onClick={toggleSearchBar} ><IoSearchOutline />
            </button>

          </div>

          <div className="Navbar_Search_2">
            <button style={{ display: searchBar ? "none" : "block" }} onClick={toggleSearchBar} ><IoSearchOutline />
            </button>
            <button style={{ display: searchBar ? "none" : "block" }}><IoMdHeartEmpty />


            </button>
            <button style={{ display: searchBar ? "none" : "block" }}><IoCartOutline />
            </button>





          </div>

        </div>


        <div className="Mobile_icon ">
          <div className="Mobile_icon_1" onClick={click}>

            <span><IoMenuOutline /></span>

          </div>

          <div className="Mobile_icon_2 ">
            <ul className={`${toggle ? "open" : "close"}`}>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Sign Up" >Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
