import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import ColorfulButton from "./ColorfulButton";
import DropDown from "./DropDown"; // Add this import
import styles from "./styles/Navbar.module.css";

function Navbar({ LOGO, LINKS, toggleSlide, isDropdownOpen, setDropdownOpen }) {
  let [badge, setBadge] = useState(0);

  return (
    <div className={styles.nav}>
      <div className={styles.hamburger} onClick={toggleSlide}>
        <GiHamburgerMenu className={styles.hamIcon} />
      </div>
      <div className={styles.logo}>
        <h1>{LOGO}</h1>
      </div>
      <div className={styles.aLinks}>
        {LINKS.map((link, index) => (
          <NavLink className={styles.navLinks} key={index} to={link.link}>
            {link.text}
          </NavLink>
        ))}
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search" />
        <div className={styles.seachBack}>
          <FaSearch className={styles.searchIcon} />
        </div>
      </div>
      <div className={styles.cart}>
        <div className={styles.cartIconDiv}>
          <Link key={"cart"} to={"cart"}>
            <CiShoppingCart className={styles.cartIcon} />
          </Link>
        </div>
        <p className={styles.badge}>{badge}</p>
      </div>
      <div
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <ColorfulButton text="Register" a="/register" />
        {isDropdownOpen && <DropDown />}
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
}

export default Navbar;
