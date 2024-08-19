import React from 'react'
import styles from './styles/Buttons.module.css'

function DarkBtn({children, text, link }) {
  // console.log(text)
  return (
    <>
    <button className={styles.dark}>{children?children:null}{text}</button>
    
    </>
  )
}

export default DarkBtn