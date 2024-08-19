import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./styles/Navbar.module.css";

function ColorfulButton({text, a}) {
  return (
    <>
    <div className={styles.before}>
        <Link key={text} to={a}>
          <div className={styles.icon}>{text}</div>{" "}
        </Link>
      </div>
    </>
  )
}

export default ColorfulButton