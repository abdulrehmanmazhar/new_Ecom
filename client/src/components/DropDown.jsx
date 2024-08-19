import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import styles from './styles/Dropdown.module.css';

function DropDown() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <CgProfile />
        <Link to={'profile'}>Profile</Link>
      </div>
      <div className={styles.wrapper}>
        <CiShoppingCart />
        <Link to={'orders'}>Orders</Link>
      </div>
      <hr />
      <div className={styles.wrapper}>
        <CiLogout />
        <div>Log Out</div>
      </div>
    </div>
  );
}

export default DropDown;
