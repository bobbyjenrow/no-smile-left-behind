import React from "react"
// import PropTypes from 'prop-types'
import styles from './index.css'

var text = "No Smile Left Behind \n 1448 Brinkstone Ln \n Boulder, CO 49233";

const ContactFooter = ()=>{
  return(
  <div className={styles.wrapper}>
    <footer className={styles.footer}>
      <div className={styles.left}>
        {
          text.split("\n ").map(i=>{
            <div className={styles.address}>{i}</div>
          })
        }
      </div>
      <div className={styles.right}></div>
    </footer>
  </div>
  )
}

ContactFooter.propTypes = {

}

export default ContactFooter
