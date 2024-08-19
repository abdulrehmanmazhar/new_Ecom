import React from 'react'
import styles from './styles/NotFound.module.css'
import LightBtn from './LightBtn'
function NotFound() {
  return (<>
  <div className={styles.div}>

    <div>OOPS! did'nt find that page. </div>
    <h2>404 Error</h2>
    <LightBtn text='Return Home' link='/'></LightBtn>
  </div>
  </>
  )
}

export default NotFound