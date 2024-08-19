import React from 'react'
import styles from './styles/Buttons.module.css'
import {Link} from 'react-router-dom'
function LightBtn({ text, link, children }) {

  return (
    <>
    <Link to={link}>
    <button className={styles.light}>{children}{text}</button>
    </Link>
    </>
  )
}

export default LightBtn